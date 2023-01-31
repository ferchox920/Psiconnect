import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { userLogin } from "../../features/apiPetitions";
import style from "./index.module.css";

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
  const [showPassword, setShowPassword] = useState(false);

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

  const viewPassword = () => {};

  const changeHandler = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(validate({ ...form, [e.target.name]: e.target.value }));
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
              {errors.email && <p>{errors.email}</p>}
            </div>
            <label>Contraseña</label>
            <div className={style.password}>
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                name="password"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => changeHandler(e)}
              />
              <div
                className={style.pswicon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img
                    className={style.img}
                    src="https://cdn-icons-png.flaticon.com/512/6866/6866733.png"
                    alt="showPassword"
                  />
                ) : (
                  <img
                    className={style.img}
                    src="https://cdn-icons-png.flaticon.com/512/6405/6405909.png"
                    alt="nonShowPassword"
                  />
                )}
              </div>
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
