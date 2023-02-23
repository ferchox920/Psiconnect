import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  getProfessionalPayments, getResultProfessionalPayments } from "../../../features/apiPetitions";
import CardConsult from "./Card/CardConsult";
import style from "./incomes.module.css"; // Importar el archivo de estilos

export default function Incomes() {
  const [consults, setConsults] = useState();
  const [pay, setPay] = useState();

  const professionalId = useSelector((store) => store.user.user.id);

  useEffect(() => {
    getProfessionalPayments(professionalId, setConsults);
    getResultProfessionalPayments(professionalId, setPay)
  }, []);

  return (
    <div className={style.paymentsContainer}> 
      <section className={style.paymentTitle}>
        <p className={style.title}>
          <b>Historial de ingresos</b>
        </p> 
      </section>

      <section className={style.mainBox}>
        <section className={style.paymentList}>
          {consults &&
            consults.map((c, i) => {
              return <CardConsult key={i} consult={c} />                
            })}

          {!consults?.length && <section className={style.infoItem}>
              <p className={style.noPymnt}>
                <b>No tienes citas agendadas</b>
              </p>
            </section> }
        </section>
      </section>

      <section className={style.totalPayment}>
        {pay ? (
          <>
            <p className={style.payTitle}>Tus ingresos con psiconnect suman en total:</p>
            <p className={style.payAmount}>{pay} usd</p>
          </>
        ) : null}
      </section>      
    </div>
  );
}
