import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Calendary from '../../../components/Calendary/Calendary'
import { getUserConsults, getUserById } from '../../../features/apiPetitions'
import style from './ApptHistory.module.css'
import Card from './Card/Card'

//sb-5wib4725027012@personal.example.com
//IR%T%Ms4


export default function ApptHistory() {

  const [consults, setConsults] = useState()
  const userId = useSelector((store) => store.user.user.id)
  

  useEffect(() => {
    getUserConsults(userId, setConsults)
  }, [])

  return (
    <div className={style.mainContainer}>
      <section className={style.titleContainer}>
        <h1>Esta es tu lista de consultas completadas y/o pendientes:</h1>       
      </section>
      
      <section className={style.infoContainer}>
        {consults && 
          consults.map((c, i) => {
            return(
              <section className={style.infoItem}>
                <Card key={i} consult={c} status={c.status} link={c.linkpay}/>
              </section>
            )
        })}

        {!consults?.length && <section className={style.infoItem}>
          <p className={style.noAppt}>
            <b>No tienes citas agendadas</b>
          </p>
        </section> }
      </section>
    </div>
  )
}
