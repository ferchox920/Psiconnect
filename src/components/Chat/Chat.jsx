import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../features/firebase/chatsFeatures";
import AllChats from "./AllChats";
import style from "./Chat.module.css";

export default function Chat() {
  const [message, setMessage] = useState("");
  const messages = useSelector((state) => state.chats.chat);

  const dispacht = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [to, setTo] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form) return;
    sendMessage({ from: user.id, to, message, state: dispacht });
  };

  return (
    <div className={style.container}>
      <div className={style.allChatsContainer}>
        <AllChats setTo={setTo} />
      </div>

      <div className={style.msgContainer}>
        <p className={style.msg}>Welcome {/*username */}!</p>
      </div>
      <form className={style.formContainer} onSubmit={handleSubmit}>
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
