import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChat } from "../../features/chatSlice";
import firestore, {
  getAllChatsOfUser,
  getMessageOfChat,
} from "../../features/firebase/chatsFeatures";
import style from "./Chat.module.css";
import closeIcon from '../../assets/close.svg'

// import ForumIcon from '@mui/icons-material/Forum';

export default function AllChats({ setTo, to,setOpen }) {
  const dispacht = useDispatch();
  const user = useSelector((state) => state.user.user);
  const chats = useSelector((state) => state.chats.allChats);
  const getAllMessage = (e) => {
    setTo(e.target.value);
    getMessageOfChat({ from: user.id, to: e.target.value, state: dispacht });
  };
  useEffect(
    () =>
      onSnapshot(
        collection(
          firestore,
          `chats/${user?.id}/chat/${user?.id}_${to}/message/`
        ),
        (snapshot) => {
         dispacht(setChat(snapshot.docs.map(doc => doc.data()))) 
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
        <img src={closeIcon} alt='closeIcon' onClick={()=>setOpen(false)} className={style.closeIcon} />
        <img src={user?.avatar} alt={user?.avatar} />
        <h2>
          {user?.name} {user?.lastName}
        </h2>
      </section>
      <div className={style.itemChats}>
        {chats?.map((chat, i) => (
          <button key={i} value={chat.idOfTo} onClick={getAllMessage}>
            {chat.to}
          </button>
        ))}
      </div>
    </div>
  );
}
