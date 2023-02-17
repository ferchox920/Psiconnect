import React, { useState } from 'react';

function ChangeEmail() {
  const [currentEmail, setCurrentEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [verifyNewEmail, setVerifyNewEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentEmail) {
      alert("Debe ingresar su correo electrónico actual.");
      return;
    }
    if (!newEmail) {
      alert("Debe ingresar su nuevo correo electrónico.");
      return;
    }
    if (!verifyNewEmail || verifyNewEmail !== newEmail) {
      alert("Debe verificar su nueva dirección de correo electrónico.");
      return;
    }
    setCurrentEmail(newEmail);
    setNewEmail('');
    setVerifyNewEmail('');
    alert("¡Se cambió su correo electrónico correctamente!");
  }

  return (
    <div>
      <h2>Cambiar correo electrónico</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="current-email">Correo electrónico actual:</label>
        <input
          type="email"
          id="current-email"
          value={currentEmail}
          onChange={(e) => setCurrentEmail(e.target.value)}
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