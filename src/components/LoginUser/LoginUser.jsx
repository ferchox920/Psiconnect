import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { userLogin } from "../../features/apiPetitions";
import style from './LoginUser.module.css'

function validate(form) {
  let errorsEmail = '';
  let errorsPassword= '';
  if (!form.email) {
    errorsEmail = "Campo obligatorio";
    return errorsEmail
  }
  if (!form.password) {
    errorsPassword = "Campo obligatorio";
    return errorsPassword
  }
}

export default function LoginUser() {
  const [errorsEmail, setErrorsEmail] = useState('');
  const [errorsPassword, setErrorsPassword] = useState('');
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword , setShowPassword]= useState(false)

  function handleCredentialResponse(response) {
    console.log(response.credential);
    const dataUser = jwtDecode(response.credential);
    console.log(dataUser);
    const body = {
      email: dataUser.email,
      password: `${dataUser.email}${dataUser.sub}`,
    };
    console.log(body);
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
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorsEmail(validate({ ...form, [e.target.name]: e.target.value }));
    setErrorsPassword(validate({ ...form, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    userLogin(form);
    //setForm({email:'', password:''});

    window.alert("logged in");
  };
  return (
    <div className={style.container}>
      <div>
        <form onSubmit={(e) => submitHandler(e)}>
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
              {errorsEmail !== '' && <p>{errorsEmail}</p>}
            </div>
            <label>Contraseña</label>
            <div className={style.password}>
              <input
                type={ showPassword ? "text" : "password"}
                value={form.password}
                name="password"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => changeHandler(e)}
              />
              <div className={style.pswicon} onClick={()=> setShowPassword(!showPassword)}>
{showPassword ? (<img className={style.img} src="https://cdn-icons-png.flaticon.com/512/6866/6866733.png" alt="showPassword"/>) :
<img className={style.img} src="https://cdn-icons-png.flaticon.com/512/6405/6405909.png" alt="nonShowPassword"/>}
              </div>
              {errorsPassword !== '' && <p>{errorsPassword}</p>}
            </div>
            <NavLink to="/forgotpassword">
              <button>Olvidé mi contraseña</button>
            </NavLink>
          </div>
          <div>
          
            <input
              type="submit"
              disabled={
                errorsEmail !== '' || errorsPassword !== ''
              }
              value={"Iniciar Sesión"}
            ></input>
          </div>
          <p>
            ¿Aún no tienes una cuenta?
            <NavLink to="/registerUser">Regístrate aquí</NavLink>
          </p>
        </form>

        <div id="SignInDiv" />
      </div>
    </div>
  );
}
