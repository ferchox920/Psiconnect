import React from "react";
import LoginUser from "../LoginUser/LoginUser";
import User from "./User";
import style from "./modal.module.css";
import { useState } from "react";
import { useEffect } from "react";


export default function FormModal({ name, set }) {
  const [value, setValue] = useState(name);
  useEffect(()=> setValue(name),[])
  const click = (e) => {
    if (e.target.id === `${style.modalContainer}`){ 
      setValue("")
      set(null)
    };
  };
  switch (value) {
    case "User":
      return (
        <div onClick={click} className={style.modalContainer} id="modal-container">
          <User set={setValue} />
        </div>
      );
    case "Professional":
      return <LoginUser />;
  }
}
