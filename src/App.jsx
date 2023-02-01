import './App.css'
import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import Details from './views/Details/Details';
import Professionals from './views/Professionals/Professionals';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import FormModal from './components/modals/Modals';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="/Professionals/:area" element={<Professionals />} />
      <Route path="/modal" element={<FormModal name='User' />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;