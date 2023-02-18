import React from "react";
import style from "./Asistencia.module.css";
import { Link } from "react-router-dom";
import AreaSliderFilter from "../../components/AreaSliderFilter/AreaSliderFilter";
import Users from "../Users/Users";

const Asistencia = () => {
  return (
    //navBar
    <>
      <div className={style.container}>
        <h2 className={style.titulo}>¿Como te ayudamos? </h2>
        <div className={style.info}>
          <div>
            <h3 className={style.subTitle}>Con nosotros:</h3>
            <p className={style.parrafo}>
              <span>Encuentra el profesional adecuado para ti:</span> Nuestros
              psicólogos están aquí para ayudarte en todo momento, sea cual sea
              tu necesidad. <br />
              <span>Toma el control de tu vida:</span>
              Con la ayuda de nuestros profesionales de la salud mental, podrás
              tomar las riendas de tu vida y superar cualquier obstáculo.
              <br />
              <span>Un espacio seguro y confidencial:</span>
              En nuestra plataforma de atención psicológica, puedes estar seguro
              de que tus conversaciones serán confidenciales y seguras.
              <br />
              <span>La atención que mereces:</span>
              Sabemos que buscar ayuda psicológica puede ser intimidante. Por
              eso, nuestros profesionales están dedicados a brindarte una
              atención empática y personalizada.
              <br />
              <span> Una nueva perspectiva: </span>A veces, todo lo que
              necesitamos es una perspectiva diferente para superar nuestros
              desafíos. Nuestros psicólogos te ayudarán a encontrar esa
              perspectiva.
            </p>
          </div>
          <div className={style.imageContainer}>
            <img
              src="https://www.intelligenia.com/img/appmovil/idea.png"
              alt="psiconnect"
            />
          </div>
        </div>
        <p className={style.parrafo}>
          Contamos con una gran variedad de profesionales a tu disposición para
          cada una de las enfermedades de salud mental que puedas padecer!
        </p>
        <h3>Algunas areas en donde podemos ayudarte!</h3>

        <AreaSliderFilter />

        <br />
        <h3 className={style.titulo}>
          Elige el profesional de tu preferencia!
        </h3>
        <p className={style.parrafo}>
        No esperes más para cuidar tu salud mental: nuestros profesionales están aquí para ti
        </p>

        <Users />
      </div>
    </>
    //footer
  );
};

export default Asistencia;
