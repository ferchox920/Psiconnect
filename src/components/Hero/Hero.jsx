import style from "./Hero.module.css";
import React, { useState } from "react";
import FormModal from "../modals/Modals";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [modal, setModal] = useState(null);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const openModal = () => {
  if(!user){
    console.log(modal)
    setModal(!modal)
  } 
  else if(user.rol=== 'professional') navigate('/professionalProfile/arrangements')
  else if(user.rol=== 'user') navigate('/userProfile/appointments')
 
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.heroContainer}>
          <div className={style.imgContainer}>
            <img className={style.img} src={!user? 'https://res.cloudinary.com/dcdywqotf/image/upload/v1676483326/Cerebritos%20svg/Cerebritomeditando_iimsr6.svg' : 'https://res.cloudinary.com/dcdywqotf/image/upload/v1676483326/Cerebritos%20svg/Cerebrito_alegre_ec68ls.svg'} alt="" />
          </div>
          <div className={style.left}>
            <h2 className={style.h2_1}> Fortaleciendo mentes,</h2> 
            <h2 className={style.h2_2}> transformando vidas.</h2>
            <h4 className={style.heroH4}>
              Recibe la atención que te mereces.
            </h4>
            {!user ? 
            <button className={style.button} onClick={openModal}>
              Empieza ahora
            </button> :
            <button className={style.button} onClick={openModal}>
            Ver mis citas 📅
          </button>}
            
          </div>
        </div>
      </div>
      {modal && <FormModal name={"User"} set={setModal}/>}
    </>
  );
}
