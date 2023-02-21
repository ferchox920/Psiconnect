import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getUserPayments,
  getResultUserPayments,
} from "../../../features/apiPetitions";
import Card from "./Card/Card.jsx";
import style from "./PaymentHistory.module.css";
export default function PaymentHistory() {
  const [consults, setConsults] = useState();

  const users = useSelector((state) => state.user.user);

  useEffect(() => {
    getUserPayments(users.id, setConsults);

  }, []);

  return (
    <div className={style.paymentsContainer}>
      {" "}
      <div className={style.paymentsTitle}>Historial de pagos</div>
      <div className={style.paymentsListContainer}>
        {" "}
        {consults &&
          consults.map((c, i) => {
            return (
              <div>
                <Card key={i} consult={c} />
              </div>
            );
          })}
        {!consults?.length && (
          <div className={style.noPymnt}>
            <p>
              {" "}
              <b>No tienes pagos realizados</b>{" "}
            </p>
          </div>
        )}
      </div>
    
    </div>
  );
}
