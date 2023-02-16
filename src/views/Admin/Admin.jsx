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
import Reviews from './views/Reviews/Reviews'
import Payments from './views/Payments/Paymets'
import Consults from './views/Consults/Consults'
import Areas from './views/Areas/Areas'

function Section({section}){
    switch (section) {
        case 'users': return <Users />
        case 'professionals':return <Professionals />
        case 'reviews':return<Reviews />
        case 'payments':return <Payments />
        case 'consults':return <Consults />
        case 'areas':return<Areas />
        
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
