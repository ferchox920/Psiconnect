import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { userRegister } from "../../features/apiPetitions";
import  validationsForm  from './validator.js';
import style from './RegisterUser.module.css'


export default function RegisterUser() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleCredentialResponse(response) {
    
    const dataUser = jwtDecode(response.credential);
    console.log(dataUser)
    const googleRegister = {
      name: dataUser.given_name,
      lastName: dataUser.family_name ? dataUser.family_name : "    ",
      email: dataUser.email,
      password: `TestPS1234`,
      avatar:dataUser.picture
    };
    userRegister(googleRegister);
    setSuccess(true);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "299389682703-76ae343sl2fo2bgjdj8jgllgbusv8i0v.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("SignInDiv2"), {
      thema: "inline",
      size: "large",
    });
  }, []);



  const handleInputChange = (e) => {
    setErrors(
        validationsForm[e.target.name](
            {   ...errors,
                [e.target.name] : e.target.value,
            }
    ))
    setForm({
        ...form,
        [e.target.name] : e.target.value,
    })
}

const handleOnSubmit = async (e) => {
  e.preventDefault()
  verifyRepeatPassword()
  if(!Object.keys(errors).at(0)){
      const registerProfessional = await professionalRegister(form)
      if(registerProfessional.data.errors || registerProfessional.status === 400){
          alert(registerProfessional.data.errors?registerProfessional.data.errors : registerProfessional.data)
      }else alert('El formulario fue enviado')
  }else alert('quedan errores')
}

const verifyRepeatPassword = () => {
  let repeatPassword = validationsForm.confirmPassword(form)
  setErrors({
      ...errors, 
      ...repeatPassword
  })
}



  return (
    <form
      onSubmit={(e)=>handleOnSubmit(e)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1>Crea una cuenta</h1>
      <input
        className={errors.name ? style.inputError : null}
        type="text"
        name="name"
        placeholder="Nombres"
        value={form.name}
        onChange={(e)=>handleInputChange(e)}
      />

      <input
        className={errors.lastName ? style.inputError : null}
        type="text"
        name="lastName"
        placeholder="Apellidos"
        value={form.lastName}
        onChange={(e)=>handleInputChange(e)}
      />

      <input
        className={errors.email ? style.inputError : null}
        type="text"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={(e)=>handleInputChange(e)}
      />

      <input
        className={errors.password ? style.inputError : null}
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={(e)=>handleInputChange(e)}
      />

      <input
        className={errors.confirmPassword ? style.inputError : null}
        type="password"
        name="confirmPassword"
        placeholder="Contraseña"
        value={form.confirmPassword}
        onChange={(e)=>handleInputChange(e)}
      />

      <input type="submit" value="Crear cuenta" />
      <div id="SignInDiv2" />
    </form>
  );
}
