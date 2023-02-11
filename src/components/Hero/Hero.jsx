import style from "./Hero.module.css";
import React, { useState } from "react";
import hero from "../../assets/hero.png";
import FormModal from "../modals/Modals";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [modal, setModal] = useState(null);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const openModal = () => {
    user ?
    navigate("/Asistencia")
    :
    setModal(!modal);
  };
  return (
    //navbar
    <>
      <div className={style.container}>
        <div className={style.heroContainer}>
          <div>
            <img className={style.img} src={hero} alt="" />
          </div>
          <div className={style.left}>
            <h2>{!user ? "Registrate!" : "Agenda!"}</h2>
            <h4>
              y Pide tu hora ya!! <br /> Nuestros profesionales te atenderan
              100% Online.{" "}
            </h4>
            <button className={style.button} onClick={openModal}>
              Agendar
            </button>
          </div>
        </div>
      </div>
      {modal && <FormModal name={"User"} />}
    </>
  );
}
