import React from 'react'
import { useSelector } from 'react-redux'
import style from './UsersForm.module.css'


export default function UsersForm (){

    const users = useSelector((store) => store.user.user)
    const [inputs, setInputs] = useState({
      name : users?.name,
      lastName: users?.lastname,
      phone: users?.phone,
      image: users?.image
    })


  return (
      <div className={style.usersForm}>
        
        <form >
        <label className={style.labelInicio}>Avatar</label>
        <p className={style.p}>*Es necesario completar los datos de su perfil</p>




        </form>
      </div>
  )
}
