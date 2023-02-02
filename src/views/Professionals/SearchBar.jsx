import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProfessionalsFilters } from "../../features/apiPetitions";

export default function SearchBar({area}) {
const [input, setInput]= useState('');
const dispatch= useDispatch();

const handleChange=(e)=>{
    setInput(e.target.value)
    
}

const handleSubmit=(e)=>{
e.preventDefault()
getProfessionalsFilters({
    type: 'global',
    state: dispatch,
area: area ? area : null,
name: input, 
lastName: input.split(' ')[1] || null
})
}
  return (
    <div style={{'marginTop':'200px'}}>
      <div >
        <input
        style={{'width':'300px'}}
          type={"text"}
          name="name"
          placeholder="busca un profesional por nombre o apellido"
          value={input}
          onChange={(e) => handleChange(e)}
        ></input>
        <button  onClick={(e) => handleSubmit(e)}>
          Buscar
        </button>
      </div>
    </div>
  );
}
