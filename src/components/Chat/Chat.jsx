import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../features/firebase/chatsFeatures";
import AllChats from "./AllChats";
import style from "./Chat.module.css";
import chat from "../../assets/chat.svg";
import Message from "./Message";
const cerebritomeditando =
  "https://res.cloudinary.com/dcdywqotf/image/upload/v1676483326/Cerebritos%20svg/Cerebritomeditando_iimsr6.svg";

export default function Chat({ initialValue }) {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const messages = useSelector((state) => state.chats.chat);
  const anchor = useRef();
  const [open, setOpen] = useState(initialValue);

  useEffect(() => {
    setOpen(initialValue);
  }, [initialValue]);
  const dispacht = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [to, setTo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage({
      from: user.id,
      to: to.idOfTo,
      message,
      state: dispacht,
    });
    setMessage("");
    anchor.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const msg = document.querySelector("#msg");
    msg?.scrollTo({ top: msg.scrollHeight, behavior: "smooth" });
  }, [to]);

  if (!open) {
    return (
      <div
        className={style.containerChatFloatfixed}
        onClick={() => setOpen(true)}
      >
        <img src={chat} alt="chat" />
      </div>
    );
  }

  return (
    <div className={style.container}>
        <AllChats setTo={setTo} to={to} setOpen={setOpen} />
      <div className={style.InfoContaner}>
        {to ? (
          <>
            <div id="msg" className={style.msgContainer}>
              {messages?.map((e) => (
                <Message key={e.id} user={user} message={e} other={to} />
              ))}
              <div ref={anchor} style={{ marginBottom: "65px" }}></div>
            </div>
            <form className={style.formContainer} onSubmit={handleSubmit}>
              <input
                className={style.input}
                placeholder="Escribe..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className={style.btn}>
                Send
              </button>
            </form>
          </>
        ) : (
          <div className={style.landingChat}>
            <img src={cerebritomeditando} alt="cerebrito meditando" />

            <h3> seleccione o inicie una conversacion </h3>
          </div>
        )}
      </div>
    </div>
  );
}
