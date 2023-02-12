import React from 'react'
import style from './ProfileUser.module.css'
import UsersForm from './UsersForm.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppHistory } from './AppHistory'
import { useParams } from 'react-router-dom'



export default function ProfileUser () {
    const users = useSelector((state) => state.user.user)
    console.log(users, 'aqui')

    const navigate = useNavigate()
    const {items} = useParams()

   


  return (
    <div className = {style.container}>
        <div className = {style.sidebarcontainer}>
        <div className={style.sidebar}>
          <div className = {style.avatar}><img src={users?.avatar} alt = '' /></div>
            <h1 className = {style.username}>{`${users?.name} ${users?.lastName}`}</h1>
            <div className={style.menusideBar}>
            
            <div className={style.itemssidebar}> 
              <button 
              className={style.buttonitems}
              name = 'perfil'
              // onClick = {() => navigate()}active ={items === 'userProfile/Profile' ? true : false }>Historia de consultas
              >Perfil</button>
              
              </div>
            
            <div className={style.itemssidebar}>
              <button 
              className={style.buttonitems}
              name = 'Historial de Consultas'
              onClick = {() => navigate()}active ={items === 'historialdeconsultas?' ? true : false }>Historia de consultas</button>
            </div>


            <div className={style.itemssidebar}><button className={style.buttonitems}>Historia de pagos</button></div>
            <div className={style.itemssidebar}><button className={style.buttonitems}>Seguridad</button></div>
          </div>
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


