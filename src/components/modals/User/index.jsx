import React, { useState } from "react";
import LoginUser from "../../LoginUser/LoginUser";
import RegisterUser from "../../RegisterUser/RegisterUser";
import "./UserModal.css";

export default function User() {
    const [switcher, setSwitcher] = useState(false);

    const click = ()=>{
        setSwitcher(!switcher)
    }
  return (
    <div className= {` User-modal ${
        switcher ? "container-derecho-activo" : null
      }`}>
         <div className="registrarse">
            <RegisterUser />
        </div>
        <div className="iniciar-sesion">
            <LoginUser />
        </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-izq">
            <h1>Bienvenido/a de nuevo</h1>
            <p>
              Para mantenerse conectado con nosotros por favor inicie sesión con
              su información personal
            </p>
            <button id="iniciar-s" onClick={click}>Iniciar sesión</button>
          </div>
          <div className="overlay-der">
            <h1>!Hola!</h1>
            <p>
              Ingresa tus datos personales y vive esta nueva aventura con
              nosotros
            </p>
            <button id="registrar-s" onClick={click}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}
