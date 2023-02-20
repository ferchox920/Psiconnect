import React, { useState } from "react";
import ChangeEmailUser from "./ChangeEmailUser/ChangeEmailUser";
import ChangePasswordUser from "./ChangePasswordUser/ChangePasswordUser";
import style from './UserSecurity.module.css'

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
        {showPassword && <ChangePasswordUser />}
        {showEmail && <ChangeEmailUser />}
      </section>
    </div>
  );
}
