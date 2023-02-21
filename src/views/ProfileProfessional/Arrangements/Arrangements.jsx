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
  createContext,
  getConsultsProfessional,
  getContextProfessional,
} from "../../../features/firebase/calendaryFeatures";
//sb-5wib4725027012@personal.example.com
//IR%T%Ms4

export default function Arrangements() {
  const [consults, setConsults] = useState();
  const [contextProfessional, setContextProfessional] = useState();
  const [startHour, setStartHour] = useState()
  const [endHour, setEndHour] = useState()
  const [daysDisabled, setDaysDisabled] = useState();
  const [freeDays, setFreeDays] = useState([])
  const [freeDaysRender, setFreeDaysRender] = useState([])


  const professionalId = useSelector((store) => store.user.user.id);

  const hours = Array.from({length: 24}, (_, i) => ("0" + i).slice(-2) + ":00");

  

  useEffect(() => {
    getProfessionalConsults(professionalId, setConsults);
    getContextProfessional({ professionalId, state: setContextProfessional });
    getConsultsProfessional({professionalId, state:setDaysDisabled});
    
  }, []);
  useEffect(() => {
    if(contextProfessional?.freeDays){
    setFreeDays(contextProfessional?.freeDays)
    setFreeDaysRender(contextProfessional?.freeDays)}
  },[contextProfessional?.freeDays])

  const createContextProfessional = () => {
    const range =  generateHours(startHour, endHour)
    console.log(range)
    createContext({
      professionalId,
      freeDays: freeDays,
      workingHours : range.length<1 ? null : range,
    });
  };

  function generateHours(startHour, endHour) {
    const selectedHours = [];
    for (let i = startHour; i <= endHour; i++) {
      const hour = i % 12 || 12; 
      const suffix = i < 12 ? 'am' : 'pm'; 
      const formattedHour = `${hour.toString().padStart(2, '0')}:00 ${suffix}`;
      selectedHours.push(formattedHour);
    }
    return selectedHours;
  }

  const handleChange = (e) => {
    if(e.target.name === 'start'){
      setStartHour(e.target.value)
    }else if (e.target.name === 'end'){
      setEndHour(e.target.value)
    }else if(e.target.name === 'days'){
      if(!freeDays.includes(e.target.value.split('-')[1])){
      setFreeDays([...freeDays, e.target.value.split('-')[1]])
      setFreeDaysRender([...freeDaysRender, e.target.value])
    }
  }
}

  const cleanRender = (e) => {
    const {value} = e.target
    console.log(value)
    setFreeDays(freeDays.filter((e) => e !== (value.split('-').length<=1 ? value : value.split('-')[1])))
    setFreeDaysRender(freeDaysRender.filter((e) => e !== value))
  }


  return (
    <div className={style.container}>
      <div className={style.consultsContainer}>
        <h1 className={style.title}>Estas son tus citas agendadas</h1>
      </div>
      <div className={style.box}>
        {consults &&
          consults.map((c, i) => {
            return <CardConsult key={i} consult={c} />;
          })}
        {!consults?.length && <p> No tienes citas agendadas </p>}
      </div>
      
      <div className={style.select}>
        <h4>Selecciona tu horario de trabajo</h4>
        <div className={style.section}>
          <label className={style.selectDays}>Aquí puedes seleccionar los días que no quieras trabajar:</label>
            <select name="days" className={style.select} onChange={(e) => handleChange(e)}>
              <option hidden>Selecciona</option>
              <option value="Lunes-Mon">Lunes</option>
              <option value="Martes-Tue">Martes</option>
              <option value="Miércoles-Wed">Miércoles</option>
              <option value="Jueves-Thu">Jueves</option>
              <option value="Viernes-Fri">Viernes</option>
              <option value="Sábado-Sat">Sábado</option>
              <option value="Domingo-Sun">Domingo</option>
            </select>
        </div>
        {freeDaysRender?.length>0 &&
        <div  className={style.divDays}>
          {freeDaysRender?.length && freeDaysRender.map((element,i) => {
            return(
              <div key={i} className={style.divDaysCard}>
                <div>{element.toString().split('-')[0]}</div>
                <button value={element} onClick={(e) => cleanRender(e)}>x</button>
              </div>
            )
          })}
        </div>}
        <div className={style.section}>
          <label>Aqué puedes seleccionar el rango horario en que trabajarás:
          </label>
          <div className={style.select}>
            <label>De {' '}
            <select className={style.select} name='start' defaultValue={hours[0]} onChange={(e) => handleChange(e)}>
              {hours.map((h, i) => {
                return(
                  <option key={i} value={`${h.slice(0,2)}`}>{h}</option>
                )
              })}
            </select> hs a </label>
            <label>
            <select className={style.select} name='end' defaultValue={hours[0]} onChange={(e) => handleChange(e)}>
            {hours.map((h, i) => {
                return(
                  <option key={i} value={`${h.slice(0,2)}`}>{h}</option>
                )
              })}
            </select> hs</label>
          </div>
        </div>
      </div>
      <div className={style.calendary}>
        <Calendary
          workingHours={contextProfessional?.workingHours || [
            "9:00 am",
            "10:00 am",
            "11:00 am",
            "12:00 am",
            "13:00 am",
            "17:00 am",
            "20:00 pm",
          ]}
          freeDays={contextProfessional?.freeDays || []}
          daysDisabled = {daysDisabled || []}
        />
      </div>
      <input type='submit' value={'Guardar Cambios'} className={style.inputSubmit} onClick={() => {createContextProfessional()}}/>
    </div>
  );
}
