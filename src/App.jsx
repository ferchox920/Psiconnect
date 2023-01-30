import { Routes, Route } from 'react-router-dom';
import RegisterPsico from './components/RegisterPsico/RegisterPsico';
import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { io } from 'socket.io-client'
import { Route, Routes} from 'react-router-dom'
import LoginUser from './components/LoginUser/LoginUser'

// const socket = io("http://localhost:3001");
function App() {
  const [count, setCount] = useState(0)

  function handleCredentialResponse(response){
    console.log('response'+response);
    const dataUser = jwtDecode(response.credential)
    console.log(dataUser);
  }

  useEffect(()=>{
    console.log(google);
    google.accounts.id.initialize({
      client_id: 'credenciales de google',
      callback: handleCredentialResponse
    });
  },[])
  google.accounts.id.renderButton(
    document.getElementById('SignInDiv'),
    {thema: 'inline', size:'large'}
  )
  return (
    <Routes>
        <Route path="/loginuser" element={<LoginUser/>} />
    </Routes>
  
  )
}


export default App;
