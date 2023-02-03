import React, { useState } from "react";
import LoginUser from "../../LoginUser/LoginUser";
import RegisterUser from "../../RegisterUser/RegisterUser";
import style from "./UserModal.module.css";

export default function User({set}) {
    const [switcher, setSwitcher] = useState(false);

    const click = ()=>{
        setSwitcher(!switcher)
    }
  return (
    <div className= {`${style.Usermodal} ${
        switcher ? style.containerDerechoActivo : null
      }`}>
         <div className={style.registrarse}>
            <RegisterUser />
        </div>
        <div className={style.iniciarSesion}>
            <LoginUser set={set} />
        </div>
      <div className={style.overlayContainer}>
        <div className={style.overlay}>
          <div className={style.overlayIzq}>
            <h1>Bienvenido/a de nuevo</h1>
            <p>
              Para mantenerse conectado con nosotros por favor inicie sesión con
              su información personal
            </p>
            <button id={style.iniciarSesion} onClick={click}>Iniciar sesión</button>
          </div>
          <div className={style.overlayD}>
            <h1>!Hola!</h1>
            <p>
              Ingresa tus datos personales y vive esta nueva aventura con
              nosotros
            </p>
            <button id={style.registrarse} onClick={click}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}
