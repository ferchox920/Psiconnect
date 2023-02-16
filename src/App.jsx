import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import Home from "./views/Home/Home";
import Details from "./views/Details/Details";
import Professionals from "./views/Professionals/Professionals";
import NavBar from "./components/NavBar/NavBar";
import Formreview from './views/FormReview/Formreview.jsx'
import Footer from "./components/Footer/Footer.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfByJWT, getUserByJWT } from "./features/apiPetitions";
import PostRegisterPsico from "./components/postRegisterPsico/PostRegisterPsico";
import RegisterProfesional from "./views/RegisterProfesionals/RegisterProfesional";
import Asistencia from "./views/Asistencia/Asistencia";
import ProfileProfessional from "./views/ProfileProfessional/ProfileProfessional";
import Chat from "./components/Chat/Chat";
import { ProSidebarProvider } from "react-pro-sidebar";
import ProfileUser from "./views/ProfileUser/ProfileUser";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Admin from "./views/Admin/Admin";



function App() {
  const user = useSelector((state) => state.user.user);
  const { pathname } = useLocation();
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
        <Route
          path="/profesional/postRegister"
          element={<PostRegisterPsico />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/Asistencia" element={<Asistencia />} />
        <Route path="/registerProfesional" element={<RegisterProfesional />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/Professionals" element={<Professionals />} />
        <Route path="/Professionals/:area" element={<Professionals />} />
        <Route path="/Formreview/:id" element={<Formreview />} />
        <Route
          path="/professionalProfile/:section*"
          element={
            <ProtectedRoute type={"professional"}>
              <ProSidebarProvider>
                <ProfileProfessional />
              </ProSidebarProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/userProfile/:section*"
          element={
            <ProtectedRoute type={"user"}>
              <ProSidebarProvider>
                <ProfileUser />
              </ProSidebarProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/:section*"
          element={
            <ProtectedRoute type={"admin"}>
              <ProSidebarProvider>
                <Admin />
              </ProSidebarProvider>
            </ProtectedRoute>
          }
        />
        {/* Redirect to landing if don´t match */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    
      {pathname.split("/")[1] !== "professionalProfile" &&
      pathname.split("/")[1] !== "userProfile" &&
      pathname.split("/")[1] !== "admin" && 'Details' && <Footer />}
      {pathname.split('/')[1] !== 'Details' && user && user.rol !== 'admin'? <Chat />  : null}
    </>
  );
}

export default App;
