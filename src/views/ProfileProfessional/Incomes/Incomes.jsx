import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  getProfessionalPayments, getResultProfessionalPayments } from "../../../features/apiPetitions";
import CardConsult from "./Card/CardConsult";

export default function Incomes() {
  const [consults, setConsults] = useState();
  const [pay, setPay] = useState();

  const professionalId = useSelector((store) => store.user.user.id);

  useEffect(() => {
    getProfessionalPayments(professionalId, setConsults);
    getResultProfessionalPayments(professionalId, setPay)
  }, []);

  return (
    <div>
      <div>Historial de pagos</div>
      <div>
        {consults &&
          consults.map((c, i) => {
            return (
              <div>
                <CardConsult key={i} consult={c} />
              </div>
            );
          })}
          <div>
          {pay ? (
            <>
        <p>Monto total generado</p>
          <p>{pay}</p>
            </>
      ) : null}
          
          </div>
      </div>
    </div>
  );
}