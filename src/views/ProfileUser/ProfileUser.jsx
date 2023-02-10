import React from 'react'
import style from './ProfileUser.module.css'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'



export default function ProfileUser () {
    const users = useSelector((store) => store.user.user)
    console.log(users, 'aqui')

   


  return (
    <div className = {style.container}>
        <div className={style.sidebar}>
          <div className = {style.avatar}><img alt = ''/></div>
            <h1 className = {style.username}>{`${users.name} ${users.lastName}`}</h1>
            <div className={style.menusideBar}>
                <div className={style.perfil}><h1>Perfil</h1></div>

                <div className={style.consulthistory}><h1>Historial consultas</h1></div>

                <div className={style.payhistory}><h1></h1>Historial de pago</div>

                <div className={style.security}><h1></h1>Seguridad</div>
            </div>
        </div>
        

    </div>
  )
}


