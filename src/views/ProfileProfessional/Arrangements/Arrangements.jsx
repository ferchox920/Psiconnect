import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Calendary from "../../../components/Calendary/Calendary";
import {
  getProfessionalConsults,
  getUserById,
} from "../../../features/apiPetitions";
import style from "./Arrangements.module.css";
import CardConsult from "./Card/CardConsult";
import {
  createConsults,
  createContext,
  getConsultsProfessional,
  getContextProfessional,
} from "../../../features/firebase/calendaryFeatures";
//sb-5wib4725027012@personal.example.com
//IR%T%Ms4

export default function Arrangements() {
  const [consults, setConsults] = useState();
  const [contextProfessional, setContextProfessional] = useState();
  const [daysDisabled, setDaysDisabled] = useState();



  const professionalId = useSelector((store) => store.user.user.id);
  const freeDays = ["Sun"];
  const workingHours = [
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 am",
    "13:00 am",
    "17:00 am",
    "20:00 pm",
  ];
  useEffect(() => {
    getProfessionalConsults(professionalId, setConsults);
    getContextProfessional({ professionalId, state: setContextProfessional });
    getConsultsProfessional({professionalId, state:setDaysDisabled});
  }, []);
 
  const createContextProfessional = () => {
    createContext({
      professionalId,
      freeDays,
      workingHours,
    });
 
  };
  return (
    <div className={style.container}>
      <div className={style.consultsContainer}>
        <h1 className={style.title}>Estas son tus citas agendadas</h1>
      </div>
      <button onClick={createContextProfessional}>testing</button>
      <div className={style.box}>
        {consults &&
          consults.map((c, i) => {
            return <CardConsult key={i} consult={c} />;
          })}
        {!consults?.length && <p> No tienes citas agendadas </p>}
      </div>
      <div className={style.calendary}>
        <Calendary
          workingHours={contextProfessional?.workingHours || []}
          freeDays={contextProfessional?.freeDays || []}
          daysDisabled = {daysDisabled || []}
        />
      </div>
    </div>
  );
}
