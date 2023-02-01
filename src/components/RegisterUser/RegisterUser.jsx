import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { userRegister } from '../../features/apiPetitions'



const validationsForm = (form) => {
  let errors = {}
    
  if(form.name.trim().length<2 || !form.name.match(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)){
    errors.name = "El nombre debe tener al menos 2 letras y no puede tener carateres especiales"
  }

  if(form.lastName.trim().length<4 || !form.lastName.match(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)){
    errors.lastName = "El apellido debe tener al menos 4 letras y no puede contener caracteres especiales"
  }

  if(!form.email || !form.email.match(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/)){
    errors.email = "Debe introducir un formato de e-mail válido"
  }

  if(form.password.trim().length<8 || !form.password.match(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)){
    errors.password = "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minúscula y un número"
  }


  return errors
}

export default function RegisterUser() {

  const [form, setForm] = useState({
    name:'',
    lastName:'',
    email: '',
    password:''
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  useEffect(()=>{
    google.accounts.id.initialize({
      client_id: '299389682703-76ae343sl2fo2bgjdj8jgllgbusv8i0v.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
    document.getElementById('SignInDiv'),
    {thema: 'inline', size:'large'}
  )
  },[])

  
  function handleCredentialResponse(response){
      const dataUser = jwtDecode(response.credential);
      const googleRegister ={
        name: dataUser.given_name,
        lastName: dataUser.family_name ? dataUser.family_name : '    ',
        email: dataUser.email,
        password: dataUser.email + '1' + 'P' 
  }
      userRegister(googleRegister)
      setSuccess(true)
  }

  function handleChange(e){
    const {name, value} = e.target
    setForm({...form,[name] : value})
  }

  function handleBlur(){
    setErrors(validationsForm(form))
  }

  function handleSubmit(e){
    e.preventDefault()
    setErrors(validationsForm(form))
    if(Object.keys(errors).length===0 && Object.values(form)[0]!==''){
      userRegister(form)
      setSuccess(true)
    }
  }

  function handleConfirmPassword(e){
    const {name, value} = e.target
    if(value !== form.password){
      setErrors(validationsForm(form))
      setErrors({...errors,[name]:'Las contraseñas son distintas'})
    }
    if(value === form.password){
      setErrors(validationsForm(form))
    }
  }

  return (
  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    {!success &&
    <div>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
          <label>Nombre
            <input type="text" name='name' placeholder='Nombres' onBlur={handleBlur} onChange={handleChange}/>
            {errors.name && <h5>{errors.name}</h5>}
          </label>
          <label>Apellidos
            <input type="text" name='lastName' placeholder='Apellidos' onBlur={handleBlur} onChange={handleChange}/>
            {errors.lastName && <h5>{errors.lastName}</h5>}
          </label>
          <label>Correo
            <input type="text" name='email' placeholder='Correo electrónico' onBlur={handleBlur} onChange={handleChange}/></label>
            {errors.email && <h5>{errors.email}</h5>}
          <label>Contraseña
            <input type="password" name='password' placeholder='Contraseña' onBlur={handleBlur} onChange={handleChange}/>
            {errors.password && <h5>{errors.password}</h5>}
          </label>
          <label>Confirmar contraseña
            <input type="password" name='confirmPassword' placeholder='Contraseña' onChange={handleConfirmPassword}/>
            {errors.confirmPassword && <h5>{errors.confirmPassword}</h5>}
          </label>
          <input type="submit" value='Crear cuenta'/>
      </form>
      <div id='SignInDiv'/>
      </div>
    }
        
        {success && <h1>Usuario creado correctamente</h1>}
  </div>
  )
}
