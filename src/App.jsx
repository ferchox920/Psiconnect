import './App.css'
import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import Details from './views/Details/Details';
import Professionals from './views/Professionals/Professionals';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Asistencia from './views/Asistencia/Asistencia';
import RegisterProfesional from './views/registerProfesional/RegisterProfesional';


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="/Asistencia" element={<Asistencia />} />
      <Route path="/registerProfesional" element={<RegisterProfesional/>} />
      <Route path="/Professionals/:area" element={<Professionals />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;