import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import Details from "./views/Details/Details";
import Professionals from "./views/Professionals/Professionals";
import NavBar from "./components/NavBar/NavBar";
import Formreview from './views/FormReview/Formreview.jsx'
import Footer from "./components/Footer/Footer.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfByJWT, getUserByJWT } from "./features/apiPetitions";

// import PostRegisterPsico from './components/postRegisterPsico/PostRegisterPsico';
import RegisterProfesional from "./views/RegisterProfesional/RegisterProfesional";
import Asistencia from "./views/Asistencia/Asistencia";
import Chat from "./components/Chat/Chat";


function App() {
  const user = useSelector((state => state.user.user));
  const dispacht = useDispatch();
  useEffect(() => {
    localStorage.getItem("tkn")
      ? getUserByJWT({
          state: dispacht,
          type: "global",
        })
      : null;
    localStorage.getItem("profTkn")
      ? getProfByJWT({
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
        <Route path="/Asistencia" element={<Asistencia />} />
        <Route path="/registerProfesional" element={<RegisterProfesional />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/Professionals/:area" element={<Professionals />} />
        <Route path='/Formreview/:id' element={<Formreview />} />
      </Routes>
      <Footer />
    { user? <Chat /> : null}
    </>
  );
}

export default App;
