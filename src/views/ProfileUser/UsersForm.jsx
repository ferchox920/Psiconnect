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
          <div className = {style.imgperfil}>
            <img src= {users?.avatar } alt="" />

          </div>
          <div className={style.inputfile}>
            <input type= 'file' className={style.fileSelect}/>                        
          </div>

          <div className={style.userInfo}>
            <input 
              type="text" 
              placeholder='Nombres' 
              value = {users?.name}
              disabled
              />
            <input 
            type="text" 
            placeholder='Apellidos'
            value = {users?.lastName}
            disabled
            />
            <input type="text" placeholder='Telefono'/>
            <input type="text" placeholder='URL de tu imagen en linea'/>
          </div>
          <input type="submit" placeholder='Enviar Cambios' className={style.formSubmit}/>
        </form>
      </div>
  )
}
