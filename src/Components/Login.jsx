import React,{useState,useContext} from 'react'
import UserContext from '..Context/UserContext.jsx'
import { useState } from 'react'
function Login(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('');
    const handleSubmit=()=>{}
    return(
    <div>
        <h2>Login</h2>
        <input type="text" value="username" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" placeholder="password"
        value="password"
        onChange={(e)=>{
            setPassword(e.target.value)
        }} />
        <button onClick="handleSubmit">Submit</button>
    </div>
    )
}