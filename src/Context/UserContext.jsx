import { useState } from "react"
import {createContext} from 'react';
const UserContext=createContext();
function UserProvider({children}){
    const[user,setUser]=useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export {UserProvider,UserContext};