import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../features/firebase/chatsFeatures";
import AllChats from "./AllChats";
import style from "./Chat.module.css";
import chat from '../../assets/chat.svg'
import Message from "./Message";

export default function Chat({}) {
  const [message, setMessage] = useState("");
  const messages = useSelector((state) => state.chats.chat);
  const anchor = useRef();
  const [open, setOpen] = useState(null)


  const dispacht = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [to, setTo] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage({ from: user.id, to:to.idOfTo, message, state: dispacht });
    setMessage('');
    anchor.current.scrollIntoView({ behavior: "smooth" });
  };
  // useEffect(()=>{    Se me rompio :(
  //   anchor.current.scrollIntoView({ behavior: "smooth" });
  // },[])

  if(!open){
    return(
      <div className={style.containerChatFloat} onClick={()=>setOpen(true)}>
        <img src={chat} alt="chat" />
      </div>
    )
  }

  return (
    <div className={style.container}>
      <div className={style.allChatsContainer}>
        <AllChats setTo={setTo} to={to} setOpen={setOpen}/>
      </div>
      <div className={style.InfoContaner}>
        <div className={style.msgContainer}>
          {messages?.map((e)=> <Message key={e.id} user={user} message={e} other={to} />)}
          <div ref={anchor} style={{ marginBottom: "65px" }}></div>
        </div>
        <form  className={style.formContainer} onSubmit={handleSubmit}>
          <input
            className={style.input}
            placeholder="Write here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className={style.btn}>Send</button>
        </form>
      </div>
    </div>
  );
}
