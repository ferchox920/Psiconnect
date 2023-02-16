import React from 'react'
import style from './CardProfessional.module.css'
import { HiOutlineArrowDown } from 'react-icons/hi'


export default function CardProfessional(props) {
  return (
    <div className = {style.card}>
      <div className={style.containimage}>
        <img className = {style.image} src={props.image} alt="" />
        
      </div>
      <p className={style.username}>{`${props.name} ${props.lastName}`}</p>
      <p className={style.areas}>Areas: {props.areas}</p>
      <p className={style.skills}>Habilidades: {props.skills}</p>
      <p className={style.precio}>Precio de consulta: {props.precio} USD</p>
      <p className={style.profile}>Perfil profesional de: {`${props.name} ${props.lastName}`}</p>
      <div className={style.descprofile} >
          <p className={style.infprofile}>{props.description}</p>
      </div>
      <p className={style.chat}>¿Tienes alguna duda?</p>
      <p className={style.parrafo}>Chateemos antes de la reserva</p>
      <p className={style.reservacita}>Reserva una cita</p>
      
      

      
      
    
      
      
    </div>
  )
}
