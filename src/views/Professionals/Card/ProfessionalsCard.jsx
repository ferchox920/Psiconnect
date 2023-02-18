import React from "react";
import style from "./index.module.css";
import {useNavigate} from 'react-router-dom'
export default function ProfessionalsCard({
  id,
  name,
  lastName,
  precio,
  avatar,
  skills,
  score,
  areas,
}) {
  const navigate = useNavigate();
  return (
    <div className={style.card} onClick={()=>navigate(`/Details/${id}`)}>
      <div className={style.blob}></div>
      <span className={style.img}>
        <img src={avatar} alt={"avatar"} />
      </span>
      <h2>
        {name}
        <br />
        <span>{lastName}</span>
      </h2>
      <div className={style.info}>
        <p><span>Skills:</span> <br /> {skills.split(' ')[0] || 'AMABLE'}</p>
        <p><span>Areas:</span> <br /> {areas.split(' ')[0]}</p>
        <p><span>Precio:</span> <br /> ${precio || 200}</p>
        <p><span>Calificación: <br /></span> {score || 3.4} / 5</p>
      </div>
    </div>
  );
}
