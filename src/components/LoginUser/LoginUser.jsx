import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { userLogin } from "../../features/apiPetitions";
import style from './index.module.css'

function validate(form) {
  let errors = {};
  if (!form.email) {
    errors.email = "Campo obligatorio";
  }
  if (!form.password) {
    errors.password = "Campo obligatorio";
  }
  return errors;
}

export default function LoginUser() {
  function handleCredentialResponse(response) {
    console.log(response.credential);
    const dataUser = jwtDecode(response.credential);
    console.log(dataUser);
    const body = {
      email: "email@asd.com",
      password: "Test1234",
    };
    userLogin(body);
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "299389682703-kcloq4hnm9v0q7jafkv4ffule1lhd6s0.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
  }, []);

  google.accounts.id.renderButton(document.getElementById("SignInDiv"), {
    thema: "inline",
    size: "large",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [hidden, setHidden] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(validate({ ...form, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setForm({ email: "", password: "" });
    window.alert("logged in");
    //LoginUser(form)
  };
  return (
    <div className={`${style.container} ${hidden? '': style.hidden}`} onClick={()=> setHidden(false)} >
      <div className={style.form}>

      <form  onSubmit={(e) => submitHandler(e)}>
        <div>
          <h1>Inicia sesión</h1>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input
              type="text"
              value={form.email}
              name="email"
              placeholder="Ingresa tu email"
              onChange={(e) => changeHandler(e)}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <label>Contraseña</label>
          <div>
            <input
              type="password"
              value={form.password}
              name="password"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => changeHandler(e)}
            />
            {/* Acá iría el ojito para visualizar la contraseña */}
            {errors.password && <p>{errors.password}</p>}
          </div>
          <NavLink to="/forgotpassword">
            <button>Olvidé mi contraseña</button>
          </NavLink>
        </div>
        <div>
          {console.log(errors.email, errors.password)}
          <input
            type="submit"
            disabled={
              errors.email !== undefined || errors.password !== undefined
            }
            value={"Iniciar Sesión"}
            ></input>
        </div>
      </form>
      <p>
        ¿Aún no tienes una cuenta?
        <NavLink to="/registerUser">Regístrate aquí</NavLink>
      </p>
      <div id="SignInDiv" />
            </div>
    </div>
  );
}
