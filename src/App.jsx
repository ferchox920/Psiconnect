
import RegisterPsico from './components/RegisterPsico/RegisterPsico';
import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { io } from 'socket.io-client'
import { Route, Routes} from 'react-router-dom'
import LoginUser from './components/LoginUser/LoginUser'

// const socket = io("http://localhost:3001");
function App() {
  
  return (
    <Routes>
        <Route path="/loginuser" element={<LoginUser/>} />
    </Routes>
  
  )
}


export default App;
