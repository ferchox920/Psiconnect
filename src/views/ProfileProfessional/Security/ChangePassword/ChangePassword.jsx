import React, { useState } from 'react';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que la contraseña actual sea correcta y que las nuevas contraseñas coincidan
    // Si todo es válido, enviar una solicitud de cambio de contraseña al servidor
  }

  return (
    <div>
      <h2>Cambiar contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="current-password">Contraseña actual:</label>
        <input
          type="password"
          id="current-password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <label htmlFor="new-password">Nueva contraseña:</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <label htmlFor="confirm-password">Confirmar nueva contraseña:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Cambiar contraseña</button>
      </form>
    </div>
  );
}

export default ChangePassword;