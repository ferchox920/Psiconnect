import { Routes, Route } from 'react-router-dom';
import RegisterPsico from './components/RegisterPsico/RegisterPsico';
import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { io } from 'socket.io-client'
import RegisterUser from './components/RegisterUser/RegisterUser';

function App() {
  return (
    <>
    <RegisterUser></RegisterUser>
    {/* <div className="App">
      <div id='SignInDiv'/>
 
    </div> */ }
    </>
  )
}

export default App;
