import { Routes, Route } from 'react-router-dom';
import RegisterPsico from './components/RegisterPsico/RegisterPsico';
import { useEffect, useState } from 'react'

// const socket = io("http://localhost:3001");
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/registerProfesional' element={<RegisterPsico />} />
      </Routes>
    </div>
  )
}


export default App;
