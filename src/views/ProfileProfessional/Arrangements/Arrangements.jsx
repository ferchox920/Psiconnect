import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Calendary from '../../../components/Calendary/Calendary'
import { getProfessionalConsults, getUserById } from '../../../features/apiPetitions'
import style from './Arrangements.module.css'
import CardConsult from './Card/CardConsult'
//sb-5wib4725027012@personal.example.com
//IR%T%Ms4


export default function Arrangements() {

  const [consults, setConsults] = useState()
  const professionalId = useSelector((store) => store.user.user.id)

  useEffect(() => {
    getProfessionalConsults(professionalId, setConsults)
  }, [])

  return (
    <div className={style.container}>
      <div className={style.consultsContainer}>
        <h1 className={style.title}>Estas son tus citas agendadas</h1>
      </div>
      <div className={style.box}>
        {consults && 
        consults.map((c, i) => {
          return(
            <div className={style.consult}>
              <CardConsult key={i} consult={c}/>
            </div>
          )
        })
        }
      </div>
      <div className={style.calendary}>
        <Calendary/>
      </div>
    </div>
  )
}
