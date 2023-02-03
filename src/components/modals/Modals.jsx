import React from "react";
import LoginUser from "../LoginUser/LoginUser";
import User from "./User";
import "./modal.css";
import { useState } from "react";
import { useEffect } from "react";

export default function FormModal({ name, set }) {
  const [value, setValue] = useState(name);
  useEffect(()=> setValue(name),[])
  const click = (e) => {
    if (e.target.id === "modalContainer"){ 
      setValue("")
      set(null)
    };
  };
  switch (value) {
    case "User":
      return (
        <div onClick={click} className={`modalContainer`} id="modalContainer">
          <User set={setValue} />
        </div>
      );
    case "Professional":
      return <LoginUser />;
  }
}
