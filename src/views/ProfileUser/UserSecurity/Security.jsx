import React, { useState } from "react";
import ChangeEmailUser from "./ChangeEmailUser/ChangeEmailUser";
import ChangePasswordUser from "./ChangePasswordUser/ChangePasswordUser";

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

      {showPassword && <ChangePasswordUser />}
      {showEmail && <ChangeEmailUser />}
    </>
  );
}
