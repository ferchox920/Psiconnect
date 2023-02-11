import React from "react";
import style from "./RegisterProfesional.module.css";
import psicologia from "../../assets/Asistencia/LogoPsicologia.svg";
import RegisterPsico from "../../components/RegisterPsico/RegisterPsico";

const RegisterProfesional = () => {
  return (
    <>
      <div className={style.container}>
        <h3 className={style.title}>¿Quieres Trabajar con nosotros?</h3>
        <div className={style.info}>
          <div>
            <p className={style.parrafo}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, rerum. Molestiae deleniti illo aut error ipsam ullam
              quis veritatis incidunt!
            </p>

            <p className={style.parrafo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde
              voluptate maiores ipsum iure ea dolores magnam assumenda eligendi
              aspernatur excepturi dolore repellat quam similique quod sequi
              quos fugiat ex veniam voluptas deserunt, asperiores vel. Minus
              pariatur ut unde nesciunt accusantium veniam, assumenda quibusdam
              accusamus amet rem consequuntur veritatis libero excepturi,
              maiores laboriosam consectetur nisi, molestias maxime beatae non
              aperiam!
            </p>
          </div>
          <div className={style.logo__psicologia}>
            <img
              src={
                "https://c0.klipartz.com/pngpicture/972/819/gratis-png-dibujo-cerebro-cerebro-thumbnail.png"
              }
              alt="Psicologia"
            />
          </div>
        </div>
        <div className={style.secondInfo}>
          <div className={style.logo__psicologia}>
            <img
              src={
               "https://altavozcultural.files.wordpress.com/2019/11/cerebrito-e1530386527667.png"
              }
              alt="Psicologia"
            />
          </div>
          <div>
            <h3 className={style.titulo}>Para registrarte necesitamos:</h3>
            <p className={style.parrafo}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, rerum. Molestiae deleniti illo aut error ipsam ullam
              quis veritatis incidunt!
            </p>
            <br />
            <h3 className={style.titulo}>Espera nuestra confirmacion</h3>
            <p className={style.parrafo}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, rerum. Molestiae deleniti illo aut error ipsam ullam
              quis veritatis incidunt!
            </p>
            <br />
          </div>
        </div>
        <div className={style.form__psico}>
          <RegisterPsico />
        </div>
      </div>
    </>
  );
};

export default RegisterProfesional;
