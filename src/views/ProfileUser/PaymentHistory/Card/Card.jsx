import React, { useEffect, useState } from 'react'
import { getProfessionalById } from '../../../../features/apiPetitions'
import style from './Card.module.css'

export default function Card({consult}) {
    const [user, setUser] = useState()

    useEffect(() => {
        getProfessionalById(consult.professionalId, setUser)
    }, [])

  return(
    <table className={style.consult}>
            <thead>
                <tr>
                    <th colSpan="2" className={style.title}>Sobre tu pago</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={`${style.tableItem1} ${style.tableItem}`}><b>Fecha de la consulta pagada: </b></td>
                    <td className={`${style.tableItem3} ${style.tableItem}`}>{consult.date}</td>
                </tr>
                <tr>
                    <td className={style.tableItem}><b>Precio: </b></td>
                    <td className={`${style.tableItem2} ${style.tableItem}`}>{consult.price} usd</td>
                </tr>
            </tbody>
    </table>
  )

  return (
    <div className={style.container}>
        <table className={style.consult}>
            <thead>
                <tr>
                    <th colSpan="2" className={style.title}>Sobre tu consulta</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Fecha: </b></td>
                    <td>{consult.date}</td>
                </tr>
                <tr>
                    <td><b>Precio: </b></td>
                    <td>{consult.price}</td>
                </tr>
            </tbody>
        </table>
        {/* <div className={style.consult}>
            <div className={style.title}>
                <h5>Sobre tu Consulta</h5>
            </div>
            <div>
                <p><b>Fecha: </b>{consult.date}</p>
                <p><b>Precio: </b>{consult.price} usd</p>
            </div>
        </div> */}
        {/* <div className={style.client}>
            <div className={style.title}>
                <h5>Sobre tu Profesional</h5>
            </div>
            {user &&
            <div>
                <p><b>Nombre: </b>{user.name}</p>  
                <p><b>Apelido: </b>{user.lastName}</p>
            </div>
            }
        </div> */}
    </div>
  )
}