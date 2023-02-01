import React from "react";
import LoginUser from "../../LoginUser/LoginUser";
import "./UserModal.css";

export default function User() {
  return (
    <div className="User-modal">
         <div className="registrarse">
            <form action="#">
                <h1>Crea una cuenta</h1>
                <div className="red-social">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-linkedin' ></i></a>
                </div>
                <p>O use su email para registrarse</p>
                <input type="text" name="nombre" placeholder="Nombre" required="" />
                <input type="email" name="email" placeholder="Email" required="" />
                <input type="password" name="contraseña" placeholder="Contraseña" required="" autocomplete="on" />
                <button>Registrarse</button>
            </form>
        </div>
        <div className="iniciar-sesion">
            <LoginUser />
            {/* 
            <form action="#">
                <h1>Iniciar sesión</h1>
                <div className="red-social">
                    <a href="#"><i className='bx bxl-facebook' ></i></a>
                    <a href="#"><i className='bx bxl-linkedin' ></i></a>
                </div>
                <p>Use su cuenta</p>
                <input type="email" name="email" placeholder="Email" required="" />
                <input type="password" name="contraseña" placeholder="Contraseña" required="" autocomplete="on" />
                <a href="#">Olvide mi contraseña</a>
                <button>Iniciar sesión</button>
            </form> 
            */}
        </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-izq">
            <h1>Bienvenido/a de nuevo</h1>
            <p>
              Para mantenerse conectado con nosotros por favor inicie sesión con
              su información personal
            </p>
            <button id="iniciar-s">Iniciar sesión</button>
          </div>
          <div className="overlay-der">
            <h1>!Hola!</h1>
            <p>
              Ingresa tus datos personales y vive esta nueva aventura con
              nosotros
            </p>
            <button id="registrar-s">Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}
