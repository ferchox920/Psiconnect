import React, { useState } from "react";
import ChangeEmail from "./ChangeEmail/ChangeEmail";
import ChangePassword from "./ChangePassword/ChangePassword";

export default function Security() {
  const [showPassword, setShowPassword] = useState(false);
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
    <>
      <div>
        <br />
        <button onClick={handleShowPassword}>Cambiar contraseña</button>
        <button onClick={handleShowEmail}>Cambiar correo electrónico</button>
      </div>

      {showPassword && <ChangePassword />}
      {showEmail && <ChangeEmail />}
    </>
  );
}