import React, { useEffect, useState } from 'react'
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
    <div className={style.container}>
      <div className={style.consultsContainer}>
        <h1 className={style.title}>Esta es tu lista de consultas completadas y/o pendientes:</h1>
      </div>
      <div className={style.box}>
        {consults && 
        consults.map((c, i) => {
          return(
            <div className={style.consult}>
              <Card key={i} consult={c}/>
            </div>
          )
        })
        }
      </div>
      {/* <div className={style.calendary}>
        <Calendary/>
      </div> */}
    </div>
  )
}
