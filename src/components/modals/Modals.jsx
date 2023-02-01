import React from "react";
import LoginUser from "../LoginUser/LoginUser";
import User from "./User";
import "./modal.css";
import { useState } from "react";

export default function FormModal({ name }) {
  const [value, setValue] = useState(name);
  const click = (e) => {
    if (e.target.id === "modal-container") setValue("");
  };
  switch (value) {
    case "User":
      return (
        <div onClick={click} className={`modal-container`} id="modal-container">
          <User />
        </div>
      );
    case "Professional":
      return <LoginUser />;
  }
}
