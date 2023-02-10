import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

export default function ProfessionalsCard({
  id,
  name,
  lastName,
  email,
  avatar,
}) {
  return (
    <Link to={`/Details/${id}`} className={style.Link}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img src={avatar} alt={"avatar"} />
        </div>
        <div className={style.dataContainer}>
          <div className={style.data}>
            <h3>{name}</h3>
            <h3>{lastName}</h3>
            <h3>{email}</h3>  
            <Link to = {`/Formreview/${id}`} className={style.Link}>
            <h3>Calificar</h3>
            </Link>  
          </div>
        </div>
      </div>
    </Link>
  );
}
