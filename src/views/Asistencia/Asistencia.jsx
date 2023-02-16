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
      <h3 className={style.titulo}>¿Como te ayudamos? </h3>
      <p className={style.parrafo}>
      Contamos con una gran variedad de profesionales a tu disposición para cada una de las enfermedades 
      de salud mental que puedas padecer!
      </p>

      <AreaSliderFilter/>

      <br />
      <h3 className={style.titulo}>Elige el profesional de tu preferencia!</h3>
      <p className={style.parrafo}>
      Elige el profesional que más te acomode y si no tienes uno como referencia podrás elegir uno 
      de acuerdo a su habilidades o calificación!
      </p>
    
      <Users />
      
    </div>
    </>
    //footer
  );
};

export default Asistencia;
