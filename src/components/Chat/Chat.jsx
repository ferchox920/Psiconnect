import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../features/firebase/chatsFeatures";
import AllChats from "./AllChats";
import style from "./Chat.module.css";

export default function Chat() {
  const [message, setMessage] = useState("");
  const messages = useSelector((state) => state.chats.chat);
  const anchor = useRef();

  const dispacht = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [to, setTo] = useState(null);
  const handleSubmit = async (e) => {
    console.log('asd')
    e.preventDefault();
    if (!message) return;
    await sendMessage({ from: user.id, to, message, state: dispacht });
    setMessage('');
    anchor.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.container}>
      <div className={style.allChatsContainer}>
        <AllChats setTo={setTo} />
      </div>
      <div className={style.InfoContaner}>
        <div className={style.msgContainer}>
          {messages?.map((e)=> <p>{e.message}</p>)}
          <div ref={anchor} style={{ marginBottom: "65px" }}></div>
        </div>
        <form  className={style.formContainer} onSubmit={handleSubmit}>
          <input
            className={style.input}
            placeholder="Write here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={style.btn}>Send</button>
        </form>
      </div>
    </div>
  );
}
