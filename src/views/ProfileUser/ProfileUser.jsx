import React from 'react'
import style from './ProfileUser.module.css'
import UsersForm from './UsersForm.jsx'
import { useSelector } from 'react-redux'



export default function ProfileUser () {
    const users = useSelector((store) => store.user.user)
    console.log(users, 'aqui')

   


  return (
    <div className = {style.container}>
        <div className={style.sidebar}>
          <div className = {style.avatar}><img alt = ''/></div>
            <h1 className = {style.username}>{`${users?.name} ${users?.lastName}`}</h1>
            <div className={style.menusideBar}>
            <div className={style.itemssidebar}><button className={style.buttonitems}>Perfil</button></div>
            <div className={style.itemssidebar}><button className={style.buttonitems}>Historia de consultas</button></div>
            <div className={style.itemssidebar}><button className={style.buttonitems}>Historia de pagos</button></div>
            <div className={style.itemssidebar}><button className={style.buttonitems}>Seguridad</button></div>
          </div>
        </div>

        <div className={style.formuser}>
          <div className={style.formcontainer}>
              <div className = {style.form}>
              <UsersForm/>
              </div>
          </div>
          
        </div>
        

    </div>
  )
}


