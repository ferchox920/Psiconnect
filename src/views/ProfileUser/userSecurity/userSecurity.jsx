import React from 'react'
import style from './userSecurity.module.css'
import { useSelector } from 'react-redux'



export default function Security () {
    const users = useSelector((state) => state.user.user)
    console.log(users, 'aqui')
  return (
    <div className = {style.container}>
        <div className={style.message}>
            Aqui va la configuracion de seguridad del paciente
        </div>
    </div>
  )
}

