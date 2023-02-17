import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  getProfessionalPayments, getResultProfessionalPayments } from "../../../features/apiPetitions";
import CardConsult from "./Card/CardConsult";
import "./Incomes.css"; // Importar el archivo de estilos

export default function Incomes() {
  const [consults, setConsults] = useState();
  const [pay, setPay] = useState();

  const professionalId = useSelector((store) => store.user.user.id);

  useEffect(() => {
    getProfessionalPayments(professionalId, setConsults);
    getResultProfessionalPayments(professionalId, setPay)
  }, []);

  return (
    <div className="incomes-container"> {/* Aplicar la clase CSS en el contenedor principal */}
      <div className="incomes-title">Historial de pagos</div>
      <div className="incomes-list-container"> {/* Agregar un contenedor para la lista de consultas */}
        {consults &&
          consults.map((c, i) => {
            return (
              <div>
                <CardConsult key={i} consult={c} />
              </div>
            );
          })}
      </div>
      <div className="incomes-pay-container"> {/* Agregar un contenedor para el monto total */}
        {pay ? (
          <>
            <p className="incomes-pay-title">Monto total generado</p>
            <p className="incomes-pay-amount">{pay}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}