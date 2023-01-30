import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import jwtDecode from 'jwt-decode'
import { io } from 'socket.io-client'

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
    <div className="App">
      <div id='SignInDiv'/>
 
    </div>
  )
}

export default App
