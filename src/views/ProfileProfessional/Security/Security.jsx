import React, { useState } from "react";
import ChangeEmail from "./ChangeEmail/ChangeEmail";
import ChangePassword from "./ChangePassword/ChangePassword";
import style from './Security.module.css'

export default function Security() {
  const [showPassword, setShowPassword] = useState(true);
  const [showEmail, setShowEmail] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(true);
    setShowEmail(false);
  };

  const handleShowEmail = () => {
    setShowPassword(false);
    setShowEmail(true);
  };

  return (
    <div className={style.securityContainer}>
      <section className={style.optionButtons}>
        <button onClick={handleShowPassword} className={style.button}>Cambiar contraseña</button>
        <button onClick={handleShowEmail} className={style.button}>Cambiar correo electrónico</button>
      </section>

      <section className={style.changeSection}>
        {showPassword && <ChangePassword />}
        {showEmail && <ChangeEmail />}
      </section>
    </div>
  );
}