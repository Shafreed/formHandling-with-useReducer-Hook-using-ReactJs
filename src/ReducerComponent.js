import React, { useState } from 'react'
import { useReducer } from 'react'

const ReducerComponent = () => {
    
    const initialState=[{
        name:'',
        number:''
    }]
    const formReducer=(state,action)=>{
        switch (action.type) {
            case 'add':
                return [...state,action.payload]
                break;
        
            default:
                break;
        }
    }

    const [form,dispatch]=useReducer(formReducer,initialState)

    const [number,setNumber]=useState('')
    const [name,setName]=useState('')

    const submit=(e)=>{
        e.preventDefault()
        const contact={
            name,
            number
        }
        setName('')
        setNumber('')
        dispatch({type:'add',payload:contact})
    }

  return (
    <div>
        <form onSubmit={submit}>
           <input type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/> 
           <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Enter Number'/>
           <button>Add contact</button> 
        </form>
        {form.map((contact)=>(
            <ul>
                <li>
                    {contact.name}
                    {contact.number}
                </li>
            </ul>
        )
            
    )}
    </div>
  )
}

export default ReducerComponent

