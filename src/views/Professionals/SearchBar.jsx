import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProfessionalsFilters } from "../../features/apiPetitions";
import style from "./index.module.css";
import lupa from "../../assets/hero/lupa.svg";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
export default function SearchBar({ area , setSelect}) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelect('Ordena por precio')
    getProfessionalsFilters({
      type: "global",
      state: dispatch,
      area: area ? area : null,
      name: input,
      lastName: input.split(" ")[1] || null,
    });
  };
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