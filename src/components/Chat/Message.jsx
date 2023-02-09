import React from "react";
import style from './Chat.module.css'

function Message({ message, user , other}) {
  console.log(message.from === user.id)
  if(message.from === user.id){ 
  return (
    <>
    <div className={style.messageOfMe}>
        <p className={style.msg}>{message.message}</p>
     
      <img src={user?.avatar} alt={user.name} className={style.img} />
    </div>
        {/* <span className={style.timeStamp}>
          {new Date(message.id).toDateString().split(" ").slice(1).join("-")}
        </span> */}
    </>
  );}
 
  return (
    <div className={style.messageOfOther}>
    <img src={other?.avatarOfTo} className={style.img}alt={other.name} />
    <p className={style.msg}>{message.message}</p>
    {/* <span className="message__timestamp">
      {new Date(message.id).toDateString().split(" ").slice(1).join("-")}
    </span> */}
 
</div>
  );
}

export default Message;
