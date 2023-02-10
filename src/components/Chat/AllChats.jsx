import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChat } from "../../features/chatSlice";
import firestore, {
  getAllChatsOfUser,
  getMessageOfChat,
} from "../../features/firebase/chatsFeatures";
import style from "./Chat.module.css";
import closeIcon from "../../assets/close.svg";

// import ForumIcon from '@mui/icons-material/Forum';

export default function AllChats({ setTo, to, setOpen }) {
  const dispacht = useDispatch();
  const user = useSelector((state) => state.user.user);
  const chats = useSelector((state) => state.chats.allChats);
  const getAllMessage = (e) => {
    const obj = JSON.parse(e.target.value)
    setTo(obj);
    getMessageOfChat({
      from: user.id,
      to: obj.idOfTo,
      state: dispacht,
    });
  };
  useEffect(
    () =>
      onSnapshot(
        collection(
          firestore,
          `chats/${user?.id}/chat/${user?.id}_${to.idOfTo}/message/`
        ),
        (snapshot) => {
          dispacht(setChat(snapshot.docs.map((doc) => doc.data())));
        }
      ),
    [to]
  );
  useEffect(() => {
    user ? getAllChatsOfUser({ user: user.id, state: dispacht }) : null;
  }, [user]);

  return (
    <div className={style.allChatsContainer}>
      <section className={style.containerImage}>
        <img
          src={closeIcon}
          alt="closeIcon"
          onClick={() => setOpen(false)}
          className={style.closeIcon}
        />
        <img src={to?.avatarOfTo || user?.avatar} alt={to?.to || user?.name} />
        <h2>
          {to?.to || 'tu'} 
        </h2>
      </section>
      <div className={style.itemChats}>
        {chats?.map((chat, i) => (
          <button
            key={i}
            value={JSON.stringify(chat)}
            onClick={getAllMessage}
            className={style.btnChat}
          >
            <img src={chat.avatarOfTo} alt={chat.to} />
            {chat.to}
          </button>
        ))}
      </div>
    </div>
  );
}
