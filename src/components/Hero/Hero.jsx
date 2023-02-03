import style from "./index.module.css";
import React from "react";
import img from "../../assets/hero/heroimg.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={style.container}>
      <div className={style.oneBox}>
        <div className={style.firstInfo}>
          <div className={style.firstInfoBox}>
            <h1 className={style.title}>Estamos para ayudarte</h1>
            <h2>Atención profesional y personalizada solo a un click</h2>
      <div className={style.buttonContainer}>
        <button className={style.button} >Registrate</button>
      </div>
          </div>
        </div>
        <div className={style.imgContainer}>
          <img className={style.img} src={img} alt="Hero img" />
        </div>
      <div className={style.lastBox}>
        <h2>¿Qué es psiconnect?</h2>
        <h3>Psiconnect es una plataforma online que presta servicios de atencion psicologica....</h3>
        <span>Contactanos</span>
      </div>
      </div>
     
     
    </div>
    
  );
}
