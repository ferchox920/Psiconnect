import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChatsOfUser } from "../../features/firebase/chatsFeatures";
import style from "./Chat.module.css";

export default function AllChats() {
  const dispacht = useDispatch();
  const chats = useSelector((state) => state.chats.allChats);
  const user = useSelector((state) => state.user.user);
  console.log(chats);
  useEffect(() => {
    user ? getAllChatsOfUser({ user: user.id, state: dispacht }) : null;
  }, [user]);

  return (
    <div className={style.container}>
      {chats?.map((chat) => (
        <h3>{chat.to}</h3>
      ))}
    </div>
  );
}
