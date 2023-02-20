import React, { useState } from "react";
import { changeEmailProfessional } from "../../../../features/apiPetitions";

function ChangeEmail() {
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
    await changeEmailProfessional({ email: emailData.newEmail });

    setEmailData({
      currentEmail: emailData.newEmail,
      newEmail: "",
    });
    setVerifyNewEmail("");
  };

  return (
    <div>
      <h2>Cambiar correo electrónico</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="current-email">Correo electrónico actual:</label>
        <input
          type="email"
          id="current-email"
          value={emailData.currentEmail}
          onChange={(e) =>
            setEmailData({ ...emailData, currentEmail: e.target.value })
          }
          required
        />
        <label htmlFor="new-email">Nuevo correo electrónico:</label>
        <div className="email-verification-container">
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
        <label htmlFor="verify-new-email">Verifica tu correo:</label>
        <div className="email-verification-container">
          <input
            type="email"
            id="verify-new-email"
            value={verifyNewEmail}
            onChange={(e) => setVerifyNewEmail(e.target.value)}
            placeholder="Verificar nuevo correo electrónico"
            required
          />
        </div>
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default ChangeEmail;
