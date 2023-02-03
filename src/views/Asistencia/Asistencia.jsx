import React from "react";
import { Link } from "react-router-dom";
import ansiendad from "../../assets/Asistencia/Ansiedad.svg";
import depresion from "../../assets/Asistencia/Depresion.svg";
import autoEstima from "../../assets/Asistencia/Autoestima.svg";
import lgbt from "../../assets/Asistencia/ComunidadLGBT.svg";
import terapiaFamiliar from "../../assets/Asistencia/TerapiaFamiliar.svg";
import psicologia from "../../assets/Asistencia/LogoPsicologia.svg";
import style from "./Asistencia.module.css";

const Asistencia = () => {
  return (
    //navBar
    <>
      <div className={style.countainer}>
        <h3>¿Como te ayudamos?</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
          incidunt!
        </p>

        <div className={style.areas}>
          <Link to={"/areas"}>
            <img src={ansiendad} alt="area1" />
          </Link>

          <Link to={"/areas"}>
            <img src={terapiaFamiliar} alt="area2" />
          </Link>

          <Link to={"/areas"}>
            <img src={depresion} alt="area3" />
          </Link>

          <Link to={"/areas"}>
            <img src={autoEstima} alt="area4" />
          </Link>

          <Link to={"/areas"}>
            <img src={lgbt} alt="area5" />
          </Link>
        </div>

        <br />
        <h3>Elige el profesional de tu preferencia</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
          incidunt!
        </p>
        <div className={style.logo__psicologia}>
          <img src={psicologia} alt="Psicologia" />
        </div>
        <br />
        <h3>Decide que horario es de tu convenencia</h3>
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
    //footer
  );
};

export default Asistencia;
