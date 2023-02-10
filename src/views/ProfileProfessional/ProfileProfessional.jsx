import React from 'react'
import ProfileForm from './Form/Form'
import Incomes from './Incomes/Incomes'
import Arrangements from './Arrangements/Arrangements'
import Security from './Security/Security'
import SideBar from './SideBar'
import style from './ProfileProfessional.module.css'
import { useParams } from 'react-router-dom'

export default function ProfileProfessional() {
  const {section} = useParams()
  
  switch (section) {
    case 'profile':
      return (
        <div className={style.container}>
          <div className={style.sideBar}>
            <SideBar/>
          </div>
          <div className={style.component}>
            <ProfileForm/>
          </div>
            
        </div>
      )
    case 'incomes':
      return (
        <div className={style.container}>
          <div className={style.sideBar}>
            <SideBar/>
          </div>
          <div className={style.component}>
            <Incomes/>
          </div>
            
        </div>
      )
    case 'arrangements':
      return (
        <div className={style.container}>
          <div className={style.sideBar}>
            <SideBar/>
          </div>
          <div className={style.component}>
            <Arrangements/>
          </div>
            
        </div>
      )
    case 'security':
      return (
        <div className={style.container}>
          <div className={style.sideBar}>
            <SideBar/>
          </div>
          <div className={style.component}>
            <Security/>
          </div>
            
        </div>
      )    
    default:
      return
  }
  
}
