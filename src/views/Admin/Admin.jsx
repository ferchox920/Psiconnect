import React from 'react'
import style from './admin.module.css'
import { useParams } from 'react-router-dom'
import SideBar from './Sidebar'
import Users from './views/User/User'
import Professionals from './views/Professionals/Professionals'
import Reviews from './views/Reviews/Reviews'
import Payments from './views/Payments/Paymets'
import Consults from './views/Consults/Consults'
import Areas from './views/Areas/Areas'
import CreateArea from './views/Data/createArea'
import EditArea from './views/Data/editArea'
import Skills from './views/Skills/Skills'

function Section({section}){
    switch (section) {
        case 'users': return <Users />
        case 'professionals':return <Professionals />
        case 'areas':return<Areas />
        case 'skills':return<Skills />
        case 'reviews':return<Reviews />
        case 'payments':return <Payments />
        case 'consults':return <Consults />
        case 'create-area':return <CreateArea />
        case 'edit-area':return <EditArea />
        
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
