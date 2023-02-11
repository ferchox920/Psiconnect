import React, { useEffect, useState } from 'react'
import { getUserById } from '../../../../features/apiPetitions'
import style from './CardConsult.module.css'

export default function CardConsult({consult}) {
    const [user, setUser] = useState()

    useEffect(() => {
        getUserById(consult.userId, setUser)
    }, [])

  return (
    <div className={style.container}>
        <div className={style.consult}>
            <div className={style.title}>
                <h5>Consulta</h5>
            </div>
            <div>
                <p><b>Fecha: </b>{consult.date}</p>
                <p><b>Precio: </b>{consult.price} usd</p>
            </div>
        </div>
        <div className={style.client}>
            <div className={style.title}>
                <h5>Paciente</h5>
            </div>
            {user &&
            <div>
                <p><b>Nombre: </b>{user.name}</p>  
                <p><b>Apelido: </b>{user.lastName}</p>
            </div>
            }
        </div>
    </div>
  )
}
