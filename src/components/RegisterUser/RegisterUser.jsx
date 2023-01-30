import React, { useState } from 'react'

const validationsForm = (form) => {
  let errors = {}
    
  if(form.name.trim().length<2 || !form.name.match(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)){
    errors.name = "El nombre debe tener al menos 2 letras y no puede tener carateres especiales"
  }

  if(form.lastname.trim().length<2 || !form.lastname.match(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)){
    errors.lastname = "El apellido debe tener al menos 2 letras y no puede contener caracteres especiales"
  }
  return errors
}



export default function RegisterUser() {

  const [form, setForm] = useState({
    name:'',
    lastname:'',
    email: '',
    password:''
  })

  const [errors, setErrors] = useState({})
 

  function handleChange(e){
    const {name, value} = e.target
    setForm({...form,[name] : value})
  }

  function handleBlur(){
    setErrors(validationsForm(form))
  }


  return (
    <form>
        <input type="text" name='name' placeholder='Nombres' onBlur={handleBlur} onChange={handleChange}/>
        {errors.name && <h5>{errors.name}</h5>}
        <input type="text" name='lastname' placeholder='Apellidos' onBlur={handleBlur} onChange={handleChange}/>
        <input type="text" value={form.email} placeholder='Correo electrónico'/>
        <input type="password" value={form.password} placeholder='Contraseña'/>
        <input type="submit" value='Crear cuenta'/>
    </form>
  )
}
