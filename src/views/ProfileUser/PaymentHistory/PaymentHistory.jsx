import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserPayments } from "../../../features/apiPetitions";
import Card from "./Card/Card.jsx";
import style from "./PaymentHistory.module.css";
export default function PaymentHistory() {
  const [consults, setConsults] = useState();

  const users = useSelector((state) => state.user.user);

  useEffect(() => {
    getUserPayments(users.id, setConsults);
  }, []);

  return (
<<<<<<< HEAD
    <div className={style.paymentsContainer}>
      <div className={style.paymentsTitle}>Historial de pagos</div>
      <div className={style.paymentsListContainer}>
=======
    <div className={style.paymentsContainer}> 
      <section className={style.paymentTitle}>
        <p className={style.title}>
          <b>Historial de pagos</b>
        </p> 
      </section>

      <section className={style.paymentList}>
>>>>>>> 2693e820ebf9ca6b4788b09790a9054188d0bfbf
        {consults &&
          consults.map((c, i) => {
            return (
              <div className={style.paymentInfo}>
                <Card key={i} consult={c} />
              </div>
            );
<<<<<<< HEAD
          })}
        {!consults?.length && (
          <div className={style.noPymnt}>
            <p>
              <b>No tienes pagos realizados</b>
            </p>
          </div>
        )}
      </div>
=======
        })}

        {!consults?.length && <div className={style.noPymnt}>
          <p>
            <b>No tienes pagos realizados</b>
          </p>
        </div>}
      </section>
>>>>>>> 2693e820ebf9ca6b4788b09790a9054188d0bfbf
    </div>
  );
}
