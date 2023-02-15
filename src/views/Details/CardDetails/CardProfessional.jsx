import React from 'react'
import style from './CardProfessional.module.css'

export default function CardProfessional(props) {
  return (
    <div className = {style.card}>
      <div className={style.containimage}>
        <img className = {style.image} src={props.image} alt="" />
        
      </div>
      <p className={style.username}>{`${props.name} ${props.lastName}`}</p>
      <p className={style.areas}>Areas: {props.areas}</p>


      
      
    </div>
  )
}
