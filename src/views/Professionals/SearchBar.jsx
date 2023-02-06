import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProfessionalsFilters } from "../../features/apiPetitions";
<<<<<<< HEAD
import style from './index.module.css'
import lupa from '../../assets/hero/lupa.svg'

export default function SearchBar({area}) {
=======
import style from "./index.module.css";
import lupa from "../../assets/hero/lupa.svg";
export default function SearchBar({ area }) {
>>>>>>> main
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

<<<<<<< HEAD
const handleSubmit=(e)=>{
e.preventDefault()
getProfessionalsFilters({
    type: 'global',
    state: dispatch,
area: area ? area : null,
name: input, 
lastName: input.split(' ')[1] || null
})
setInput('')
}
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    getProfessionalsFilters({
      type: "global",
      state: dispatch,
      area: area ? area : null,
      name: input,
      lastName: input.split(" ")[1] || null,
    });
  };
>>>>>>> main
  return (
    <form className={style.inputCointer} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={style.input}
        type={"text"}
        name="name"
        placeholder="busca un profesional por nombre o apellido"
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <button className={style.button} type="submit">
        <img src={lupa} alt="lupa" />
      </button>
    </form>
  );
}
