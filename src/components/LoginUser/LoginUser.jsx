import React, { useEffect, useState } from "react";
import { NavLink , useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import { userLogin } from "../../features/apiPetitions";
import { validationsForm } from "./validate";
import {spanError,inputError, submitError, submitSuccess} from './LoginUser.module.css'

export default function LoginUser({ set }) {
  const navigate= useNavigate()
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleCredentialResponse(response) {
    const dataUser = jwtDecode(response.credential);
    const body = {
      email: dataUser.email,
      password: `TestPS1234`,
    };
    userLogin(body);
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "299389682703-0bh5pf7g1r7c21169huc3s75rfdqr0cu.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("SignInDiv"), {
      thema: "inline",
      size: "large",
    });
  }, []);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(
      validationsForm[e.target.name]({
        ...errors,
        [e.target.name]: e.target.value,
      })
    );
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!Object.keys(errors).at(0)) {
      const loginUser = await userLogin(form);
      console.log(Object.keys(errors).at(0))
      if ( loginUser.response && loginUser.response.status === 400) {
        setSuccess({submit: false, message: loginUser.response.data})
       // alert( loginUser.response.data);
      } else {
        console.log('success true')
        setSuccess({submit: true, message: 'Acceso correcto'})
        navigate('/')} //alert("El formulario fue enviado");
    } else {
      console.log(Object.keys(errors).at(0))
      setSuccess({submit: false, message: 'Corrobore los campos requeridos'})//alert("quedan errores");
  }};
  return (
    <form onSubmit={submitHandler}>
      <h1>Iniciar sesión</h1>
      <p>Use su cuenta</p>
      <div id="SignInDiv" />
      
      <input
        type="text"
        value={form.email}
        name="email"
        placeholder="Correo electrónico"
        onChange={changeHandler}
        className={errors.email ? inputError : null}
      /><span className={spanError}>{errors.email}</span>
      
      <input
        type="password"
        value={form.password}
        name="password"
        placeholder="Contraseña"
        onChange={changeHandler}
        className={errors.password ? inputError : null}
      />
<span className={spanError}>{errors.password}</span>
      <button type="submit"  onSubmit={submitHandler}>
        Iniciar Sesión
      </button>
{Object.keys(success).at(0) && success.submit === false ?
  <span className={submitError}>⚠{success.message}⚠</span> : <span className={submitSuccess}>{success.message}</span>

}
      <NavLink to="/forgotpassword">
        <h5>Olvidé mi contraseña</h5>
      </NavLink>
    </form>
  );
}
//disabled={Object.keys(errors).at(0) ? true : false}