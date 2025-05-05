import { useState } from 'react'
import UserContextProvider from '/home/deftsoft/Downloads/context api/src/Context/UserContext.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserProvider>
      <h1>React with jas</h1>
     </UserProvider>
    </>
  )
}

export default App
