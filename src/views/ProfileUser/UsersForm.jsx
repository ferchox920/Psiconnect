import React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'
import putUserData from '../../features/apiPetitions.js'
import style from './UsersForm.module.css'
import swal from "sweetalert";


export default function UsersForm (){

    const users = useSelector((state) => state.user.user)

    const [ error, setError ] = useState({
      name : '',
      lastName: '',
      phone: '',
      image: ''

    })
    const [input, setInput] = useState({
      name : '',
      lastName: '',
      phone: '',
      image: ''
    })

    const handleInputChanges = (e) => {
   
      setInput({
        ...input,
        [e.target.name]: e.target.value,
        
      });
      
      setError(validation({
          ...input,
          [e.target.name]: e.target.value,
        }))
     
    };

    const handleSubmitUpdate = (e) => {
        e.preventDefault()
        if(Object.entries(error).length == 0){
          putUserData(input).then ()
          swal({
            title: "Cambios guardados!",
            text: `Sus datos fueron actualizados correctamente`,
            icon: "success",
          })
          
        }else 
        swal({
          title: "Error!",
          text: Object.values(error)[0],
          icon: "error",
        })

        setInput({
          name : '',
          lastName: '',
          phone: '',
          image: ''
        })
        alert('Sus datos han sido actualizados')
    }


  return (
      <div className={style.usersForm}>
        <p className={style.p}>*Por favor complete los datos  de su perfil</p>
        
        <form className= {style.form} onSubmit = {e => handleSubmitUpdate(e)}>
          <label className={style.labelInicio}>Avatar</label>
          <div className = {style.imgperfil}>
            <img src= {users?.avatar } alt="Avatar" className={style.userAvatar}/>

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
              onChange= {e => handleInputChanges(e)}
              />
              {error.name ? <p className = {style.inputerrorname}>{error.name}</p> : <></>}

            <input 
            type="text" 
            placeholder='Apellidos'
            name = 'lastName'
            value = {input.lastName}
            onChange= {handleInputChanges} 
            />
            {error.lastName ? <p className = {style.inputerrorlastName}>{error.lastName}</p> : <></>}
            <input 
            type="text" 
            placeholder='Telefono'
            name = 'phone'
            value = {input.phone}
            onChange= {handleInputChanges}
            />
            {error.phone ? <p className = {style.inputerrorPhone}>{error.phone}</p> : <></>}
            
            <input 
            type="text" 
            placeholder='URL de tu imagen en linea' 
            id = 'imgUrl'
            name = 'image'
            value = {input.image}
            onChange= {e => handleInputChanges(e)}
            />
            

          </div>
          
          <button 
           className={style.formSubmit}
           type="submit" 
           disabled = {Object.keys(validation(input)).length !== 0 ? true : false}
           onSubmit = {e => handleSubmitUpdate(e)}  >Actualizar</button>

          <button type="submit"  className={style.saveImg}>Guardar Imagen</button>
          <button type="submit"  className={style.changeImg}>Cambiar Imagen</button>
        
        </form>
      </div>
  )
}


const validation  = (input) => {
  let error = {}
  const onlyLetter = new RegExp('^[A-Z]+$', 'i');
  const rgOnlyNumbers = new RegExp(/^\d+$/)
  

  if (!input.name) error.name = 'El nombre es requerido'
  else if(!onlyLetter.test(input.name)) error.name = "Solo letras" 

  if (!input.lastName) error.lastName = 'El apellido es requerido'
  else if(!onlyLetter.test(input.lastName)) error.lastName = "Solo letras" 

  if(!input.phone) error.phone = 'Nro tlf es requerido'
  else if(!rgOnlyNumbers.test(input.phone)) error.phone = "Solo numeros" 
  
return error
}
