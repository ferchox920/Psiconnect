import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
<<<<<<< HEAD
import Details from './views/Details/Details';
import Professionals from './views/Professionals/Professionals';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserByJWT } from './features/apiPetitions';
// import PostRegisterPsico from './components/postRegisterPsico/PostRegisterPsico';
// import RegisterProfesional from './views/RegisterProfesional/RegisterProfesional';
import Asistencia from './views/Asistencia/Asistencia';
=======
import Details from "./views/Details/Details";
import Professionals from "./views/Professionals/Professionals";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserByJWT } from "./features/apiPetitions";

// import PostRegisterPsico from './components/postRegisterPsico/PostRegisterPsico';
import RegisterProfesional from "./views/RegisterProfesional/RegisterProfesional";
import Asistencia from "./views/Asistencia/Asistencia";
>>>>>>> devTesting

function App() {
  const dispacht = useDispatch();
  useEffect(() => {
    localStorage.getItem("tkn")
      ? getUserByJWT({
          state: dispacht,
          type: "global",
        })
      : null;
  }, []);
  return (
    <>
<<<<<<< HEAD
    <NavBar />
    <Routes>
    {/* <Route path='/profesional/postRegister' element={<PostRegisterPsico />} /> */}
      <Route path="/" element={<Home />} />
      <Route path='/Asistencia' element={<Asistencia />} />
      {/* <Route path='/registerProfesional' element={<RegisterProfesional />} /> */}
      <Route path="/details/:id" element={<Details />} />
      <Route path="/Professionals" element={<Professionals />} />
      <Route path="/Professionals/:area" element={<Professionals />} />
      
    </Routes>
    <Footer />
=======
      <NavBar />
      <Routes>
        {/* <Route path='/profesional/postRegister' element={<PostRegisterPsico />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Asistencia" element={<Asistencia />} />
        <Route path="/registerProfesional" element={<RegisterProfesional />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/Professionals/:area" element={<Professionals />} />
      </Routes>
      <Footer />
>>>>>>> devTesting
    </>
  );
}

export default App;
