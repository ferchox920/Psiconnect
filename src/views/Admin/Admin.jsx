import React from 'react'
// import ProfileForm from './Form/Form'
// import Incomes from './Incomes/Incomes'
// import Arrangements from './Arrangements/Arrangements'
// import Security from './Security/Security'

import style from './admin.module.css'
import { useParams } from 'react-router-dom'
import SideBar from './Sidebar'
import Users from './views/User/User'
import Professionals from './views/Professionals/Professionals'

function Section({section}){
    switch (section) {
        case 'users': return <Users />
        case 'professionals':return <Professionals />
        case 'skills':return<div>{section}</div>
        case 'reviews':return<div>{section}</div>
        case 'payments':return<div>{section}</div>
        case 'consults':return<div>{section}</div>
        case 'areas':return<div>{section}</div>
        
        default:
          return
      }
}





export default function Admin() {
  const {section} = useParams()

      return (
        <div className={style.container}>
          <div className={style.sideBar}>
            <SideBar />
          </div>
          <div className={style.component}>
            <Section section={section} />
          </div>            
        </div>
      )
}
