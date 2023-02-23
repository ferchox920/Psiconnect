import React, { useEffect, useState } from 'react'
import { getProfessionalById } from '../../../../features/apiPetitions'
import style from './Card.module.css'

export default function Card({consult}) {
    const [user, setUser] = useState()

    useEffect(() => {
        getProfessionalById(consult.professionalId, setUser)
    }, [])

  return(
    <div className={style.pymntContainer}>
        <p>
            <b>Sobre tu Pago</b>
        </p>

        <div className={style.paymentData}>
            <p>
                <b>Consulta pagada: </b>{consult.date}
            </p>

            <p>
                <b>Precio: </b>{consult.price} usd
            </p>
        </div>            
    </div>
  )
}