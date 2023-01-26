import React from 'react'

export default function RegisterUser() {
  return (
    <form>
        <input type="text" placeholder='Nombres'/>
        <input type="text" placeholder='Apellidos'/>
        <select name="docType">
            <option value="Tipo de documento" hidden></option>
            <option value="DNI">DNI</option>
            <option value="PASSPORT">Pasaporte</option>
        </select>
    </form>
  )
}
