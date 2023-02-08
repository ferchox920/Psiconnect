import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllChatsOfUser,
  getMessageOfChat,
} from "../../features/firebase/chatsFeatures";
import style from "./Chat.module.css";

export default function AllChats({setTo}) {
  const dispacht = useDispatch();
  const user = useSelector((state) => state.user.user);
  const chats = useSelector((state) => state.chats.allChats);
  const getAllMessage = (e) => {
    setTo(e.target.value);
    getMessageOfChat({ from: user.id, to: e.target.value, state: dispacht });
  };
  useEffect(() => {
    user ? getAllChatsOfUser({ user: user.id, state: dispacht }) : null;
  }, [user]);

  return (
    <div className={style.container}>
      {chats?.map((chat, i) => (
        <button key={i} value={chat.idOfTo} onClick={getAllMessage}>
          {chat.to}
        </button>
      ))}
    </div>
  );
}
