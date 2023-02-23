import React, { useState } from "react";
import { changePasswordProfessional } from "../../../../features/apiPetitions";
import style from './ChangePassword.module.css'

//Hay un problema con el token que no permite que la petition se ejecute

function ChangePassword() {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    oldPassword: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwords.newPassword !== confirmPassword) {
      alert("Las nuevas contraseñas no coinciden.");
      return;
    }
    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(passwords.newPassword)) {
      alert(
        "La nueva contraseña debe tener al menos una letra mayúscula, un número y tener un mínimo de 8 caracteres."
      );
      return;
    }
    // Si todo es válido, enviar una solicitud de cambio de contraseña al servidor
    await changePasswordProfessional(passwords);
    setPasswords({ oldPassword: "", newPassword: "" });
    setConfirmPassword("");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    setButtonDisabled(true);
    setTimeout(() => setButtonDisabled(false), 500);
  };

  return (
    <div className={style.changeContainer}>
      <h2 className={style.psswrdTitle}>Cambiar contraseña</h2>
      <form className={style.changeForm} onSubmit={handleSubmit}>
        <label className={style.formLabel} htmlFor="current-password">Contraseña actual:</label>
        <div className={style.changeField}>
          <input
            type={showPassword ? "text" : "password"}
            id="current-password"
            value={passwords.oldPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, oldPassword: e.target.value })
            }
            required
          />
          <button
            type="button"
            className={style.changeButton}
            onClick={toggleShowPassword}
            disabled={buttonDisabled}
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
        <label  className={style.formLabel} htmlFor="new-password">Nueva contraseña:</label>
        <div className={style.changeField}>
          <input
            type={showPassword ? "text" : "password"}
            id="new-password"
            value={passwords.newPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, newPassword: e.target.value })
            }
            required
          />
          <button
            type="button"
            className={style.changeButton}
            onClick={toggleShowPassword}
            disabled={buttonDisabled}
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
        <label className={style.formLabel} htmlFor="confirm-password">Confirmar nueva contraseña:</label>
        <div className={style.changeField}>
          <input
          type={showPassword ? "text" : "password"}
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
          <button
            type="button"
            className={style.changeButton}
            onClick={toggleShowPassword}
            disabled={buttonDisabled}
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
        <button className={style.submitButton} type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default ChangePassword;
