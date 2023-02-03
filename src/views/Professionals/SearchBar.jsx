import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProfessionalsByName } from "../../features/apiPetitions";
import style from './index.module.css'
import lupa from '../../assets/hero/lupa.svg'
export default function SearchBar(props) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getProfessionalsByName({
      type: "global",
      state: dispatch,
      name: input,
      lastName: input.split(" ")[1] || null,
    });
  };
  return (
    <div className={style.inputCointer}>
      <input
        className={style.input}
        type={"text"}
        name="name"
        placeholder="busca un profesional por nombre o apellido"
        value={input}
        onChange={(e) => handleChange(e)}
      ></input>
      <button className={style.button} onClick={(e) => handleSubmit(e)}>
      <img src={lupa} alt="lupa" />
      </button>
    </div>
  );
}
