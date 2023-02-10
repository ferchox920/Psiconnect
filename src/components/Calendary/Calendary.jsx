import React, { useState } from "react";
import { useSelector } from "react-redux";
import { requestConsultation } from "../../features/apiPetitions";
import style from "./Calendary.module.css";
const Calendary = ({ professionalId }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const user = useSelector((state) => state.user.user);
  const goToPayment = (body) => {
    requestConsultation({ ...body, userId: user.id, professionalId }).then(
      (e) => (window.location.href = e)
    );
  };

  const [workingHours, setWorkingHours] = useState([
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "13:00 pm",
    "14:00 pm",
    "15:00 pm",
    "16:00 pm",
    "17:00 pm",
  ]);
  const [selectedHour, setSelectedHour] = useState(null);

  const renderWeek = () => {
    const days = [];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 0; i < 7; i++) {
      const day = new Date(currentDate);
      day.setDate(day.getDate() + i);

      days.push(

        <div key={i} className={style.day}>
          <div className={style.weekday_Date}>
            <div className={style.weekDay}>{weekDays[day.getDay()]}</div>
            <div className={style.date}>{day.getDate()}</div>
          </div>
          <div className={style.workingHours}>{renderWorkingHours(day)}</div>
        </div>
        
      );
    }

    return (
    
      <div className={style.week} style={{ display: "flex", flexWrap: "wrap" }}>
        {days}
      </div>
    );
  };

  const renderWorkingHours = (day) => {
    const hours = [];
    for (let i = 0; i < workingHours.length; i++) {
      hours.push(
        <div
          key={i}
          className={style.hour}
          onClick={() => setSelectedHour({ day, hour: workingHours[i] })}
        >
          {workingHours[i]}
        </div>
      );
    }

    return hours;
  };

  return (
  
    <div className={style.calendar}>
      <h2 className={style.titlecalendar}>Agenda un cita</h2>
      <div className={style.header}>
        <button
          className={style.right}
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.setDate(currentDate.getDate() - 7))
              )
            }
            >
          &larr;
        </button>
        <div>{currentDate.toLocaleString("default", { month: "long" })} </div>
        <button
          className={style.left}
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.setDate(currentDate.getDate() + 7))
              )
            }
            >
          &rarr;
        </button>
      </div>
      {renderWeek()}
      {selectedHour && (
        <div className={style.modal}>
          <div>
            {selectedHour.day.toLocaleString("default", { weekday: "long" })},{" "}
            {selectedHour.day.toLocaleString("default", { month: "long" })}{" "}
            {selectedHour.day.getDate()}, {selectedHour.hour}
          </div>
          <button
            className={style.button}
            onClick={() => setSelectedHour(null)}
            >
            Close
          </button>
          <button
            className={style.button}
            onClick={() =>
              goToPayment({
                date: `${selectedHour.day.toLocaleString("default", {
                  weekday: "long",
                })}
                ${selectedHour.day.toLocaleString("default", {
                  month: "long",
                })} 
                ${selectedHour.day.getDate()}, ${selectedHour.hour}`,
                price: "200",
              })
            }
          >
            Reserva
          </button>
        </div>
      )}
    </div>
   
  );
};
export default Calendary;
