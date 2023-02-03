import './App.css'
import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import Details from './views/Details/Details';
import Professionals from './views/Professionals/Professionals';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserByJWT } from './features/apiPetitions';
import RegisterPsico from './components/RegisterPsico/RegisterPsico';

function App() {
  const dispacht = useDispatch();
  useEffect(() =>{
    getUserByJWT({
      state:dispacht,
      type:'global'
    })}
    ,[])
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/registerProfesional' element={<RegisterPsico />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="/Professionals/:area" element={<Professionals />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;