import React from "react";
import style from "./Asistencia.module.css"
import { Link } from "react-router-dom";
import AreaSliderFilter from "../../components/AreaSliderFilter/AreaSliderFilter";
import Users from "../Users/Users";

const Asistencia = () => {
  return (
    //navBar
    <>
    <div className={style.countainer}>
      <h3 className={style.titulo}>Como te ayudamos </h3>
      <p className={style.parrafo}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
        incidunt!
      </p>

      <AreaSliderFilter/>

      <br />
      <h3 className={style.titulo}>Elige el profesional de tu preferencia</h3>
      <p className={style.parrafo}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        rerum. Molestiae deleniti illo aut error ipsam ullam quis veritatis
        incidunt!
      </p>
    
      <Users />
      
    </div>
    </>
    //footer
  );
};

export default Asistencia;
