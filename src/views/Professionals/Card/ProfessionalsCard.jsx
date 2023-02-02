import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfessionalsCard({id, name, lastName, email, avatar, skills}) {
    return (
        <Link to={`/Details/${id}`} style={{textDecoration:'none', color:'black'}}>
            <div style={{ border: "1px solid black", padding: "10px", display: "flex", width:'400px',height:'200px', margin:'10px'}}>
            <img src={avatar} alt={'avatar'} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
            <div style={{ marginLeft: "10px" }}>
                <h3>Nombre: {name}</h3>
                <h3>Apellido: {lastName}</h3>
                <h3>Correo: {email}</h3>
                <h3>Habilidades: {skills}</h3>
            </div>
            </div>
        </Link>
    );
}
