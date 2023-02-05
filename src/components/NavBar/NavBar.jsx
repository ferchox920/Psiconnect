import style from "./NavBar.module.css";
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
      <div className={style.container}>
        <div className={style.nav}>
          <div className={style.logo}>
            <Link to={"/"}>
              <div className={style.navLogo}>
                <img src={logo} alt="logo" />
                <h3>psiconnect</h3>
              </div>
            </Link>
          </div>
          <div className={style.nav_list}>
            <div>
              <Link to={"/"}>
                <h3 className={style.navItem}>¿Qué es Psiconnect? </h3>
              </Link>
            </div>
            <div>
              <Link to={"/registerProfesional"}>
                {" "}
                <h3 className={style.navItem}>¿Eres medico? </h3>
              </Link>
            </div>
            <div>
              <Link to={"/AreasProfesional"}>
                <h3 className={style.navItem}>Especialidades y servicios</h3>
              </Link>
            </div>
            <div>
              <Link to={"/Asistencia"}>
                <h3 className={style.navItem}>¿Cómo te ayudamos?</h3>
              </Link>
            </div>
            {user ? (<div style={{display:'flex'}}>
              <h4 className={style.navItem}>{user.name}</h4>
              <img className={style.img_avatar} src={user.avatar || 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1'} alt={user.name} />
            </div>
            ) : (
              <div className={style.loginDiv}>
                <div onClick={openModal}>
                  <h3>Iniciar sesion</h3>
                </div>
                <div onClick={openModal}>
                  <h3>Registrate</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {modal && <FormModal name="User" set={setModal} />}
    </>
  );
}
