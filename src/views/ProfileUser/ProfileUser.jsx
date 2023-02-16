import React from 'react'
import style from './ProfileUser.module.css'
import UsersForm from './UsersForm/UsersForm.jsx'
import { useParams } from 'react-router-dom'
import ApptHistory from './ApptHistory/ApptHistory.jsx'
import Payments from './Payments/Payments.jsx'
import SideBar from './SideBar.jsx'
import Security from './userSecurity/userSecurity'

export default function ProfileUser () {
  const {section} = useParams()

  switch (section) {
    case 'profile':
      return (
        <div className={style.container}>
          <div className={style.sideBar}>
            <SideBar/>
          </div>
          <div className={style.component}>
            <UsersForm/>
          </div>            
        </div>
      )
    case 'appointments':
      return (
        <div className={style.container}>
          <div className={style.sideBar}>
            <SideBar/>
          </div>
          <div className={style.component}>
            <ApptHistory/>
          </div>            
        </div>
      )
    case 'payments':
      return (
        <div className={style.container}>
          <div className={style.sideBar}>
            <SideBar/>
          </div>
          <div className={style.component}>
            <Payments/>
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
            <Security />
          </div>   
        </div>
      )    
    default:
      return
  }
}


