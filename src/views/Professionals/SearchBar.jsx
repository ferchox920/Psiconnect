import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProfessionalsByName } from "../../features/apiPetitions";

export default function SearchBar(props) {
const [input, setInput]= useState('');
const dispatch= useDispatch();

const handleChange=(e)=>{
    setInput(e.target.value)
    
}

const handleSubmit=(e)=>{
e.preventDefault()
getProfessionalsByName({
    type: 'global',
    state: dispatch,
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
