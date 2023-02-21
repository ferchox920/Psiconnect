import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProfessionalById } from "../../../../features/apiPetitions";
import style from "./Card.module.css";

export default function Card({ consult, status, link }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    status === "COMPLETED"
      ? navigate(`/Formreview/${consult.professionalId}`)
      : (window.location.href = link);
  };

  useEffect(() => {
    getProfessionalById(consult.professionalId, setUser);
  }, []);

  return (
    <div className={style.cardContainer}>
      <section className={style.dataContainer}>
        <div>
          <p>
            <b>Sobre tu Consulta</b>
          </p>

          <p>
            <b>Fecha: </b>
            {consult.date}
          </p>

          <p>
            <b>Precio: </b>
            {consult.price} usd
          </p>
        </div>

        {user && (
          <div>
            <p>
              <b>Sobre tu Profesional</b>
            </p>

            <p>
              <b>Nombre: </b>
              {user?.name}
            </p>

            <p>
              <b>Apelido: </b>
              {user?.lastName}
            </p>
          </div>
        )}
      </section>

      {status === "COMPLETED" ? (
        <section className={style.statusContainer}>
          <p>
            Estado de consulta: <b>ACEPTADA</b>
          </p>

          <button className={style.navigateButton} onClick={handleNavigate}>
            Califica tu experiencia
          </button>
        </section>
      ) : (
        <section className={style.statusContainer}>
          <p>
            Estado de consulta: <b>PENDIENTE</b>
          </p>
          <button className={style.navigateButton} onClick={handleNavigate}>
            Link de Pago
          </button>
        </section>
      )}
    </div>
  );
}
