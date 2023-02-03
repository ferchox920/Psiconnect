import React from "react";
import style from "./RegisterProfesional.module.css"
import psicologia from "../../assets/Areas/LogoPsicologia.svg";





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
      

      </div>
    </>
  );
};

export default RegisterProfesional;
