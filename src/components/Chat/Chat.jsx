import React, { useState } from "react";
import AllChats from "./AllChats";
import style from "./Chat.module.css";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.container}>
      <div className={style.allChatsContainer}>
        <AllChats />
      </div>

        <div className={style.msgContainer}>
          <p className={style.msg}>Welcome {/*username */}!</p>
        </div>
        <form className={style.formContainer}>
          <input
            placeholder="Write here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={style.btn}>Send</button>
        </form>
        
     
    </div>
  );
}
