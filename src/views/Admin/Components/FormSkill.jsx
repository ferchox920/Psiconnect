import { useState } from "react";
import { errorMenssage } from "../../../features/errorsModals";
import { createSkill, editSkill } from "../feutures/apiPetitions";
import style from "./FormSkill.module.css";
import closeIcon from "../../../assets/close.svg";

export default function FormSkill({
  initialValue,
  id,
  close,
  anchor,
  setAnchor,
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.length > 3 && value.length < 20) {
      (await initialValue)
        ? editSkill({ skill: value, id }).then(() => setAnchor(!anchor))
        : createSkill({ skill: value }).then(() => setAnchor(!anchor));

      return close(false);
    }
    errorMenssage(
      "no debe de tener menos de 3 caracteres y mas de 20 caracteres"
    );
  };

  return (
    <div className={style.containerModal}>
      <form onSubmit={handleSubmit} className={style.modal}>
        <img src={closeIcon} alt="x" onClick={() => close(false)} />
        <h2>{initialValue ? "Edit" : "Create"} skill</h2>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">{initialValue ? "Edit" : "Create"}</button>
      </form>
    </div>
  );
}
