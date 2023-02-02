import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { userLogin } from "../../features/apiPetitions";
import { validate } from "./validate";

export default function LoginUser({set}) {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleCredentialResponse(response) {
    const dataUser = jwtDecode(response.credential);
    const body = {
      email: dataUser.email,
      password: `${dataUser.email}${dataUser.sub}A`,
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
    setErrors(validate({ ...form, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(form));
    if (!Object.keys(errors).length) 
      return userLogin(form).then(e => set(false));
    
    return window.alert( Object.values(errors)[0])
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>Iniciar sesión</h1>
      <div className="red-social"></div>
      <p>Use su cuenta</p>
      <div id="SignInDiv" />
      <input
        type="text"
        value={form.email}
        name="email"
        placeholder="Correo electrónico"
        onChange={changeHandler}
        style={errors.email? {border:"1px solid red"}:null}
      />
      <input
        type="password"
        value={form.password}
        name="password"
        placeholder="Contraseña"
        onChange={changeHandler}
        style={errors.password? {border:"1px solid red"}:null}
      />

      <button
        type="submit"
        onSubmit={submitHandler}
      >
        Iniciar Sesión
      </button>

      <NavLink to="/forgotpassword">
        <h5>Olvidé mi contraseña</h5>
      </NavLink>
    </form>
  );
}
