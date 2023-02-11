import React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'
import style from './UsersForm.module.css'


export default function UsersForm (){

    const users = useSelector((state) => state.user.user)
    const [inputs, setInputs] = useState({
      name : users?.name,
      lastName: users?.lastname,
      phone: users?.phone,
      image: users?.image
    })


  return (
      <div className={style.usersForm}>
        <p className={style.p}>*Por favor complete los datos  de su perfil</p>
        
        <form className= {style.form}>
        <label className={style.labelInicio}>Avatar</label>
        <div className = {style.imgperfil}></div>
        <div className={style.inputfile}>
          <input type= 'file' />
        </div>




        </form>
      </div>
  )
}
