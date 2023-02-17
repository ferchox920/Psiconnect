import React, { useState } from 'react';

function ChangeEmail() {
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Debe ingresar su correo electrónico actual.");
      return;
    }
    if (!newEmail) {
      alert("Debe ingresar su nuevo correo electrónico.");
      return;
    }
    if (!showVerification) {
      alert("Debe verificar su nueva dirección de correo electrónico.");
      return;
    }
    alert("¡Se cambió su correo electrónico correctamente!");
  }

  const handleSendVerification = (e) => {
    e.preventDefault();
    if (!newEmail) {
      alert("Debe ingresar su nuevo correo electrónico.");
      return;
    }
    // Enviar un correo electrónico con el código de verificación al usuario
    setShowVerification(true);
  }

  const handleVerify = (e) => {
    e.preventDefault();
    if (!verificationCode) {
      alert("Debe ingresar el código de verificación.");
      return;
    }
    // Verificar el código de verificación y establecer el correo electrónico
    setEmail(newEmail);
    setNewEmail('');
    setVerificationCode('');
    setShowVerification(false);
    alert("¡Se verificó su nueva dirección de correo electrónico!");
  }

  const toggleShowVerification = () => {
    setShowVerification(!showVerification);
    setButtonDisabled(true);
    setTimeout(() => setButtonDisabled(false), 500);
  }

  return (
    <div>
      <h2>Cambiar correo electrónico</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="current-email">Correo electrónico actual:</label>
        <input
          type="email"
          id="current-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="new-email">Nuevo correo electrónico:</label>
        <div className="email-verification-container">
          <input
            type="email"
            id="new-email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
          <button
            type="button"
            className="email-verification-button"
            onClick={handleSendVerification}
            disabled={buttonDisabled}
          >
            Enviar código de verificación
          </button>
        </div>
        {showVerification && (
          <div className="email-verification-container">
            <input
              type="text"
              id="verification-code"
              placeholder="Código de verificación"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <button
              type="button"
              className="email-verification-button"
              onClick={handleVerify}
              disabled={buttonDisabled}
            >
              Verificar
            </button>
          </div>
        )}
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default ChangeEmail;