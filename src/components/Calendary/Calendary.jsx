import React, { useState } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { requestConsultation } from "../../features/apiPetitions";
import style from "./Calendary.module.css";
import { createConsults } from "../../features/firebase/calendaryFeatures";

const Calendary = ({ workingHours, professionalId, freeDays, price, daysDisabled }) => {
  const [currentDate, setCurrentDate] = useState(new Date());


  const user = useSelector((state) => state.user.user);
  const goToPayment = (body) => {
    createConsults({
      professionalId,
      hours: body.date
    });
    requestConsultation({ ...body, userId: user.id, professionalId }).then(
      (e) => (window.location.href = e)
    );
  };

  const validateHours = (day, hour) => {
    return (
      freeDays.includes(day.toString().split(" ")[0]) ||
      day < new Date() ||
      daysDisabled.includes(`${day.toString().split(' ').slice(0,4).join(' ')} ${hour}`)
    );
  };
  const validateDate = (day, hour) => {
    console.log(daysDisabled);
    validateHours(day, hour)
      ? swal({
        title:'Upps!',
        text:'lo siento pero ese horario no esta disponible',
      })
      : setSelectedHour({ day, hour });
  };

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
          className={`${style.hour} ${
            validateHours(day, workingHours[i])
              ? style.hourDisabled
              : null
          }`}
          onClick={() => validateDate(day, workingHours[i])}
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
            {selectedHour.hour}
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
                date: `${selectedHour.day.toString().split(' ').slice(0,4).join(' ')} ${selectedHour.hour}`,
                price: price || "200",
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
