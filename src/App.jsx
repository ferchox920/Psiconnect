import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import Details from "./views/Details/Details";
import Professionals from "./views/Professionals/Professionals";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfByJWT, getUserByJWT } from "./features/apiPetitions";
import ConfirmEmail from "./components/ConfirmEmail/ConfirmEmail.jsx";
import PostRegisterPsico from './components/postRegisterPsico/PostRegisterPsico';
import RegisterProfesional from "./views/RegisterProfesionals/RegisterProfesional";
import Asistencia from "./views/Asistencia/Asistencia";
import { createChat, getAllChats } from "./features/firebase/chatsFeatures";

function App() {
  const dispacht = useDispatch();
  useEffect(() => {
    localStorage.getItem("tkn")
      ? getUserByJWT({
          state: dispacht,
          type: "global",
        })
      : (localStorage.getItem('profTkn') 
          ? getProfByJWT({
              state: dispacht,
              type: "global",
          }): null) ;
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/confirmationEmail" element={<ConfirmEmail />}/>
        <Route path='/profesional/postRegister' element={<PostRegisterPsico />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/Asistencia" element={<Asistencia />} />
        <Route path="/registerProfesional" element={<RegisterProfesional />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/Professionals/:area" element={<Professionals />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
