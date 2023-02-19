import React, { useState } from "react";
import {  changeEmailUser } from "../../../../features/apiPetitions";
import style from './ChangeEmailUser.module.css'

const ChangeEmailUser = () => {
    const [emailData, setEmailData] = useState({
        currentEmail: "",
        newEmail: "",
      });
      const [verifyNewEmail, setVerifyNewEmail] = useState("");
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!emailData.currentEmail) {
          alert("Debe ingresar su correo electrónico actual.");
          return;
        }
        if (!emailData.newEmail) {
          alert("Debe ingresar su nuevo correo electrónico.");
          return;
        }
        if (!verifyNewEmail || verifyNewEmail !== emailData.newEmail) {
          alert("Debe verificar su nueva dirección de correo electrónico.");
          return;
        }
        await changeEmailUser({ email: emailData.newEmail });
        setEmailData({
          currentEmail: emailData.newEmail,
          newEmail: "",
        });
        setVerifyNewEmail("");
      };
    
      return (
        <div className={style.changeContainer}>
          <h2 className={style.emailTitle}>Cambiar correo electrónico</h2>
          <form className={style.changeForm} onSubmit={handleSubmit}>
            <label className={style.formLabel} htmlFor="current-email">Correo electrónico actual:</label>
            <div className={style.changeField}>
              <input
                type="email"
                id="current-email"
                value={emailData.currentEmail}
                onChange={(e) =>
                  setEmailData({ ...emailData, currentEmail: e.target.value })
                }
                required
              />
            </div>
            
            <label className={style.formLabel} htmlFor="new-email">Nuevo correo electrónico:</label>
            <div className={style.changeField}>
              <input
                type="email"
                id="new-email"
                value={emailData.newEmail}
                onChange={(e) =>
                  setEmailData({ ...emailData, newEmail: e.target.value })
                }
                required
              />
            </div>
            <label className={style.formLabel} htmlFor="verify-new-email">Verifica tu correo:</label>
            <div className={style.changeField}>
              <input
                type="email"
                id="verify-new-email"
                value={verifyNewEmail}
                onChange={(e) => setVerifyNewEmail(e.target.value)}
                required
              />
            </div>
            <button className={style.submitButton} type="submit">Guardar cambios</button>
          </form>
        </div>
      );
    }
    

export default ChangeEmailUser