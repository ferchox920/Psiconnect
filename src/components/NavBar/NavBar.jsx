import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/LogoCerebro.svg";
import FormModal from "../modals/Modals";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function NavBar() {
  const [modal, setModal] = useState(null);
  const user = useSelector((state) => state.user.user);
  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      <div className='container'>
        <div className='nav'>
          <div className='logo'>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
              <div>
                <h3>PSICONNECT</h3>
              </div>
            </Link>
          </div>
          <div className='nav_list'>
            <div>
              <Link to={"/"}>
                <h3>¿Qué es psiconnect? </h3>
              </Link>
            </div>
            <div>
              <Link to={"/registerProfesional"}>
                {" "}
                <h3>¿Eres medico? </h3>
              </Link>
            </div>
            <div>
              <Link to={"/AreasProfesional"}>
                <h3>Especialidades y servicios</h3>
              </Link>
            </div>
            <div>
              <Link to={"/Asistencia"}>
                <h3>¿Cómo te ayudamos?</h3>
              </Link>
            </div>
            {user ? (<div style={{display:'flex'}}>
              <h4>{user.name}</h4>
              <img className='img_avatar' src={user.avatar || 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1'} alt={user.name} />
            </div>
            ) : (
              <>
                <div onClick={openModal}>
                  <h3>Iniciar sesion</h3>
                </div>
                <div onClick={openModal}>
                  <h3>Registrate</h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {modal && <FormModal name="User" set={setModal} />}
    </>
  );
}
