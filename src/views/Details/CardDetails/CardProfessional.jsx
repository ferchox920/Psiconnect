import React from 'react'
import style from './CardProfessional.module.css'

export default function CardProfessional(props) {
  return (
    <div className = {style.card}>
      <div className={style.image}>
        <img src={props.image} alt="" />

      </div>
      
      
    </div>
  )
}
