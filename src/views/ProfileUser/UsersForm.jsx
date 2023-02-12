import React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'
import putUserData from '../../features/apiPetitions.js'
import style from './UsersForm.module.css'
import swal from "sweetalert";


export default function UsersForm (){

    const users = useSelector((state) => state.user.user)
    const [ error, setError ] = useState({})
    const [input, setInput] = useState({
      name : users?.name,
      lastName: users?.lastname,
      phone: users?.phone,
      image: users?.image
    })

  const handleInputChanges = () => {
    setInput({
      ...input,
      [e.target.name] : e.targe.value

    })
    setError (
      validation({
        ...input,
        [e.target.name] : e.target.value
      })
    )}


  return (
      <div className={style.usersForm}>
        <p className={style.p}>*Por favor complete los datos  de su perfil</p>
        
        <form className= {style.form}>
          <label className={style.labelInicio}>Avatar</label>
          <div className = {style.imgperfil}>
            <img src= {users?.avatar } alt="Avatar de Usuario" className={style.userAvatar}/>

          </div>
          <div className={style.inputfile}>
            <input type= 'file' className={style.fileSelect}/>                        
          </div>

          <div className={style.userInfo}>
            <input 
              type="text" 
              placeholder='Nombres' 
              name = 'name'
              value = {input.name}
              onChange= {handleInputChanges}
              
              />
            <input 
            type="text" 
            placeholder='Apellidos'
            name = 'lastName'
            value = {input.lastName}
            onChange= {handleInputChanges}
            
            />
            <input 
            type="text" 
            placeholder='Telefono'
            name = 'phone'
            value = {input.phone}
            onChange= {handleInputChanges}
            
            />
            <input 
            type="text" 
            placeholder='URL de tu imagen en linea' 
            id = 'imgUrl'
            name = 'image'
            value = {input.image}
            onChange= {e => handleInputChanges(e)}
            />
            

          </div>
          
          <button type="submit"  className={style.formSubmit}>Actualizar</button>
          <button type="submit"  className={style.saveImg}>Guardar Imagen</button>
          <button type="submit"  className={style.changeImg}>Cambiar Imagen</button>
        
        </form>
      </div>
  )
}


const validation  = (input) => {
  let error = {}
  const rgOnlyLetters = new RegExp(/^[a-zA-Z]+$/)
  const rgOnlyNumbers = new RegExp(/^\d+$/)
  

  if (!input.name) error.name = 'Name is required'
  else if(!rgOnlyLetters.test(input.name)) error.name = "Only Letters" 

  

}
