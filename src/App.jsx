import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RegisterPsico from './components/RegisterPsico/RegisterPsico';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/register/psico' element={<RegisterPsico />} />
      </Routes>
    </>
  )
}


export default App
