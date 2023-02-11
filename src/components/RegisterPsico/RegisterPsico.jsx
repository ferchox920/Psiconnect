import { useState } from "react";
import { professionalRegister } from "../../features/apiPetitions";
import validationsForm from "./validator.js";
import style from "./RegisterPsico.module.css";
import { errorMenssage } from "../../features/errorsModals";

export default function RegisterPsico() {
  const [register, setRegister] = useState({
    name: "",
    lastName: "",
    email: "",
    DNI: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({});

  const verifyRepeatPassword = () => {
    let repeatPassword = validationsForm.confirmPassword(register);
    setErrors({
      ...errors,
      ...repeatPassword,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    verifyRepeatPassword();
    if (!Object.keys(errors).length) {
      professionalRegister(register)
    } else errorMenssage(Object.values(errors)[0]);
  };

  const handleInputChange = (e) => {
    setErrors(
      validationsForm[e.target.name]({
        ...errors,
        [e.target.name]: e.target.value,
      })
    );
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={(e) => handleOnSubmit(e)}
      className={style.classPsicoRegister}
    >
        <h2 className={style.title}> Completa tus datos!</h2>
      <div className={style.inputs}>
        <input
          className={errors.name ? style.inputError : null}
          type="text"
          name="name"
          placeholder="Nombres"
          value={register.name}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          className={errors.lastName ? style.inputError : null}
          type="text"
          name="lastName"
          placeholder="Apellidos"
          value={register.lastName}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className={style.inputs}>
        <input
          className={errors.email ? style.inputError : null}
          type="email"
          name="email"
          placeholder="Correo@email.com"
          value={register.email}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          className={errors.DNI ? style.inputError : null}
          type="text"
          name="DNI"
          placeholder="numero de DNI/Pasaporte"
          value={register.DNI}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className={style.inputs}>
        <input
          className={errors.repeatPassword ? style.inputError : null}
          type="password"
          name="password"
          value={register.password}
          placeholder="Repetir contraseña"
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          className={errors.password ? style.inputError : null}
          type="password"
          name="repeatPassword"
          value={register.repeatPassword}
          placeholder="Repetir contraseña"
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <button
        className={style.boton}
        id="idSubmitRegister"
        type="submit"
      >Enviar</button>
    </form>
  );
}
