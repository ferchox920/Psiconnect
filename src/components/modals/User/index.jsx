import React, { useState } from "react";
import LoginUser from "../../LoginUser/LoginUser";
import RegisterUser from "../../RegisterUser/RegisterUser";
import style from "./UserModal.module.css";

export default function User({set, closeModal}) {
    const [switcher, setSwitcher] = useState(false);
    const [loginProf, setloginProf] = useState(false);

    const click = ()=>{
        setSwitcher(!switcher)
    }
  return (
    <div className= {`${style.Usermodal} ${
        switcher ? style.containerDerechoActivo : null
      }`}>
         <div className={style.registrarse}>
            <RegisterUser closeModal={closeModal} />
        </div>
        <div className={style.iniciarSesion}>
            <LoginUser set={set} closeModal={closeModal} loginProf={loginProf} setloginProf={setloginProf} />
        </div>
      <div className={style.overlayContainer}>
        <div className={`${style.overlay} ${loginProf?style.loginProf:null}`}>
          <div className={style.overlayIzq}>
            <h1 className={style.text}>Bienvenido/a de nuevo</h1>
            <p className={style.text}>
              Para mantenerse conectado con nosotros por favor inicie sesión con
              su información personal
            </p>
            <button className = {style.button} id={style.iniciarSesion} onClick={click}>Iniciar sesión</button>
          </div>
          <div className={style.overlayD}>
            <div className={style.ContainerText}>
            <h1 className={style.text} >!Hola!</h1>
            <p className={style.text}>
              Ingresa tus datos personales y vive esta nueva aventura con
              nosotros
            </p>
            </div>
            <button className= {style.button}id={style.registrarse} onClick={click}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}
