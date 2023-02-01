import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { userLogin } from "../../features/apiPetitions";
// import style from "./LoginUser.module.css";
import { validate } from "./validate";

export default function LoginUser() {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const [showPassword, setShowPassword] = useState(false);

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
    if (Object.keys(errors).length === 0 && Object.values(form)[0] !== "") {
      userLogin(form);
      window.alert("logged in");
    }
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <h1>Iniciar sesión</h1>
      <div className="red-social">
      </div>
      <p>Use su cuenta</p>
      <div id="SignInDiv" />
      <>
        <input
          type="text"
          value={form.email}
          name="email"
          placeholder="Correo electrónico"
          onChange={(e) => changeHandler(e)}
        />

        <>
          <input
            type= "password"
            value={form.password}
            name="password"
            placeholder="Contraseña"
            onChange={(e) => changeHandler(e)}
          />
        </>
      </>
      <div>
        <input
          type="submit"
          disabled={errors.email !== undefined || errors.password !== undefined}
          value={"Iniciar Sesión"}
        ></input>
      </div>
      <NavLink to="/forgotpassword">
        <h5>Olvidé mi contraseña</h5>
      </NavLink>
    </form>
  );
}
