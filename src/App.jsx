import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import Details from './views/Details/Details';
import Professionals from './views/Professionals/Professionals';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserByJWT } from './features/apiPetitions';

// import PostRegisterPsico from './components/postRegisterPsico/PostRegisterPsico';
import RegisterProfesional from './views/registerProfesional/RegisterProfesional';
import Asistencia from './views/Asistencia/Asistencia';

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
    <NavBar />
    <Routes>
    {/* <Route path='/profesional/postRegister' element={<PostRegisterPsico />} /> */}
      <Route path="/" element={<Home />} />
      <Route path='/Asistencia' element={<Asistencia />} />
      <Route path='/registerProfesional' element={<RegisterProfesional />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="/Professionals" element={<Professionals />} />
      <Route path="/Professionals/:area" element={<Professionals />} />
      
    </Routes>
    <Footer />
    </>
  );
}

export default App;
