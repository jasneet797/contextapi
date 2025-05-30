import React,{useState,useContext} from 'react'
import {UserContext} from '../Context/UserContext.jsx'

// import { useState } from 'react'
function Login(){
    let [username,setUsername]=useState('')
    let [password,setPassword]=useState('');
    const{setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
    return(
    <div>
        <h2>Login</h2>
        <input type="text" value={username}placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
        {"  "}
        <input type="password" placeholder="password"
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
    )
}
export default Login;