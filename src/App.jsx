import React from 'react'
import { Route, Routes} from 'react-router-dom'
import LoginUser from './components/LoginUser/LoginUser'

function App() {
  return (
    <Routes>
        <Route path="/loginuser" element={<LoginUser/>} />
    </Routes>
  
  )
}


export default App
