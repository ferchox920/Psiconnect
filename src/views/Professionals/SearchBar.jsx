import React, { useState } from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { getProfessionalsFilters } from "../../features/apiPetitions";
import style from "./index.module.css";
import lupa from "../../assets/hero/lupa.svg";
export default function SearchBar({ area }) {
=======
import { getProfessionalsByName } from "../../features/apiPetitions";
import style from './index.module.css'
import lupa from '../../assets/hero/lupa.svg'

export default function SearchBar(props) {
>>>>>>> 13359c79a250fc3cc2f2b7c2f511313f937e828d
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getProfessionalsFilters({
      type: "global",
      state: dispatch,
      area: area ? area : null,
      name: input,
      lastName: input.split(" ")[1] || null,
    });
    setInput("")
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    
    getProfessionalsByName({
      type: "global",
      state: dispatch,
      name: input,
      lastName: input.split(" ")[1] || null,
    });
    setInput("")
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
<<<<<<< HEAD
    </form>
=======
      <button className={style.button2} onClick={(e) => handleSubmit2(e)}>
      Ver Todos
      </button>

    </div>
>>>>>>> 13359c79a250fc3cc2f2b7c2f511313f937e828d
  );
}
