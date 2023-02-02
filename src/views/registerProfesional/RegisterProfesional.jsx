import React from "react";
import { Link } from "react-router-dom";
import psicologia from "../../assets/Asistencia/LogoPsicologia.svg";
import style from "./RegisterProfesional.module.css";

const RegisterProfesional = () => {
  return (
    <>
      <div className={style.countainer}>
        <h3>¿Quieres Trabajar con nosotros?</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
          incidunt!
        </p>

        <div className={style.logo__psicologia}>
          <img src={psicologia} alt="Psicologia" />
        </div>
       

     
        <h3>Para registrarte necesitamos:</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
          incidunt!
        </p>
        <br />
        <h3>Espera nuestra confirmacion</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
          incidunt!
        </p>
        <h3>
          <Link to={"/registerUser"}>Confia en nosotros</Link>
        </h3>
      </div>
    </>
  );
};

export default RegisterProfesional;
