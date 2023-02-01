import style from "./index.module.css";

export default function NavBar() {
  return (
    <>
      <div className={style.container}>
        <img src="" alt="LOGO" />
        <Link to={""}>
          <h2>PSICONNECT</h2>
        </Link>
      </div>
      <div>
        <Link to={"/home"}>
          <h3>¿Qué es psiconnect? </h3>
        </Link>
      </div>
      <div>
        <Link to={"/registerProfesional"}>¿Eres médico?</Link>
      </div>
      <div>
        <Link to={"/AreasProfesional"}>Especialidades y servicios</Link>
      </div>
      <div>
        <Link to={"/Asistencia"}>¿Cómo te ayudamos?</Link>
      </div>
      <div>
        <Link to={""}>Inicio</Link>
      </div>
      <div>
        <Link to={""}>Registrate</Link>
      </div>
    </>
  );
}
