import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { getUserByJWT, userLoginByGoogle, userRegister } from "../../features/apiPetitions";
import validationsForm from "./validator.js";
import style from "./RegisterUser.module.css";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

export default function RegisterUser({ closeModal }) {
  const dispacht = useDispatch();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    hola: 'rellene todos los campos'
  });

  function handleCredentialResponse(response) {
    const dataUser = jwtDecode(response.credential);
    const googleRegister = {
      name: dataUser.given_name,
      lastName: dataUser.family_name ? dataUser.family_name : "    ",
      email: dataUser.email,
      password: `TestPS1234`,
      avatar: dataUser.picture,
    };
    userLoginByGoogle(googleRegister)
      .then((e) => {
        getUserByJWT({
          state: dispacht,
          type: "global",
        });
      })
      .then(() =>
        swal({
          title: "Good job!",
          text: `Bienvenido ${googleRegister.name}`,
          icon: "success",
        })
      )
      .then(() => closeModal(null))
      .catch(e => console.log('error'))
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
      validationsForm[e.target.name]({
        ...form,
        [e.target.name]: e.target.value,
      })
  
    );
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!Object.keys(errors).at(0)) {
      userRegister(form)
      .then((e) => {
        getUserByJWT({
          state: dispacht,
          type: "global",
        });
      })
      .then(() =>
        swal({
          title: "Good job!",
          text: `Bienvenido ${form.name}`,
          icon: "success",
        })
      )
      .then(() => closeModal(null))
      .catch(e => console.log('error'))
    } else   swal({
      title: "Error!",
      text: Object.values(errors)[0],
      icon: "error",
    })
}
  

  return (
    <form
      onSubmit={(e) => handleOnSubmit(e)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1>Crea una cuenta</h1>
      <input
        className={errors.name ? style.inputError : null}
        type="text"
        name="name"
        placeholder="Nombres"
        value={form.name}
        onChange={(e) => handleInputChange(e)}
      />

      <input
        className={errors.lastName ? style.inputError : null}
        type="text"
        name="lastName"
        placeholder="Apellidos"
        value={form.lastName}
        onChange={(e) => handleInputChange(e)}
      />

      <input
        className={errors.email ? style.inputError : null}
        type="text"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={(e) => handleInputChange(e)}
      />

      <input
        className={errors.password ? style.inputError : null}
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={(e) => handleInputChange(e)}
      />

      <input
        className={(errors.repeatPassword || errors.confirmPassword )? style.inputError : null}
        type="password"
        name="confirmPassword"
        placeholder="Contraseña"
        value={form.confirmPassword}
        onChange={(e) => {handleInputChange(e)}}
      />

      <input type="submit" value="Crear cuenta" />
      <div id="SignInDiv2" />
    </form>
  );
}
