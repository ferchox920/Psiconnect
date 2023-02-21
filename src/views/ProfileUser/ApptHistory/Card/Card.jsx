import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getProfessionalById } from '../../../../features/apiPetitions'
import style from './Card.module.css'

export default function Card({consult, status, link}) {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    const handleNavigate = (e) => {
        e.preventDefault()
        status=== 'COMPLETED' ? navigate(`/Formreview/${user?.professionalId}`) : window.location.href=link
    }

    useEffect(() => {
        getProfessionalById(consult.professionalId, setUser)
    }, [])

  return (
    <div className={style.container}>
        <div className={style.consult}>
            <div className={style.title}>
                <h5>Sobre tu Consulta</h5>
            </div>
            <div>
                <p><b>Fecha: </b>{consult.date}</p>
                <p><b>Precio: </b>{consult.price} usd</p>
            </div>
        </div>
        <div className={style.client}>
            <div className={style.title}>
                <h5>Sobre tu Profesional</h5>
            </div>
            {user &&
            <div>
                <p><b>Nombre: </b>{user?.name}</p>  
                <p><b>Apelido: </b>{user?.lastName}</p>
            </div>   
            }
        </div>
        
        {status=== 'COMPLETED'?
            <div>
                <p>Estado de consulta: <b>ACEPTADA</b></p>
                <button onClick={handleNavigate}>
                   Calificacion
                </button>
                
            </div>
        :   <div>
                <p>Estado de consulta: <b>PENDIENTE</b></p>
                <button onClick={handleNavigate}>
                    Link de Pago
                </button>
            </div>
        }
    </div>
  )
}