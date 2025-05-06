
import {UserProvider} from './Context/UserContext.jsx'

import Login from './Components/Login.jsx'

import Profile from './Components/Profile.jsx'
function App() {
  return (
    <>
     <UserProvider>
      <Login class="login"/>
      <Profile class="profile"/>
     </UserProvider>
    
    </>
  )
}

export default App
