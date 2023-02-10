import React from "react";
import style from "./RegisterProfesional.module.css";
import psicologia from "../../assets/Asistencia/LogoPsicologia.svg";
import RegisterPsico from "../../components/RegisterPsico/RegisterPsico";

const RegisterProfesional = () => {
  return (
    <>
<div className={style.container}>
        <h3 className={style.titulo}>¿Quieres Trabajar con nosotros?</h3>
        <p className={style.parrafo}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
          incidunt!
        </p>

        <p className={style.parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde
          voluptate maiores ipsum iure ea dolores magnam assumenda eligendi
          aspernatur excepturi dolore repellat quam similique quod sequi quos
          fugiat ex veniam voluptas deserunt, asperiores vel. Minus pariatur ut
          unde nesciunt accusantium veniam, assumenda quibusdam accusamus amet
          rem consequuntur veritatis libero excepturi, maiores laboriosam
          consectetur nisi, molestias maxime beatae non aperiam!
        </p>

        <div className={style.logo__psicologia}>
          <img src={psicologia} alt="Psicologia" />
        </div>

        <h3 className={style.titulo}>Para registrarte necesitamos:</h3>
        <p className={style.parrafo}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
          incidunt!
        </p>
        <br />
        <h3 className={style.titulo}>Espera nuestra confirmacion</h3>
        <p className={style.parrafo}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
          incidunt!
        </p>
        <br/>
        <div className={style.form__psico}>
          <RegisterPsico />
        </div>
      </div>
    </>
  );
};

export default RegisterProfesional;
