import React from "react";
import style from "./RegisterProfesional.module.css";
import psicologia from "../../assets/Areas/LogoPsicologia.svg";
import RegisterPsico from "../../components/RegisterPsico/RegisterPsico";

export default function RegisterProfesional(){
  return (
    <>
<div className={style.countainer}>
        <h3>¿Quieres Trabajar con nosotros?</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
          incidunt!
        </p>

        <p>
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
        <div className={style.form}>
          <RegisterPsico />
        </div>
      </div>
    </>
  );
};


