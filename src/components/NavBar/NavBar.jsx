import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/LogoCerebro.svg";

export default function NavBar() {
  return (
    <>
      <div className={style.container}>
        <div className={style.nav}>
          <div className={style.logo}>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
              <div>
                <h3>PSICONNECT</h3>
              </div>
            </Link>
          </div>
          <div className={style.nav_list}>
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
              <Link to={"/asistencia"}>
                <h3>Especialidades y servicios</h3>
              </Link>
            </div>
            <div>
              <Link to={"/asistencia"}>
                <h3>¿Cómo te ayudamos?</h3>
              </Link>
            </div>
            <div>
              <Link to={""}>
                <h3>Inicio</h3>
              </Link>
            </div>
            <div>
              <Link to={""}>
                <h3>Registrate</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
