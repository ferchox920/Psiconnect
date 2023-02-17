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
            
            <button className={style.cta} onClick={openModal}>
            <span>{!user ?"Empeza ahora!": 'Ver mis citas'}</span>
            <svg viewBox="0 0 13 10" height="30px" width="35px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
          </div>
        </div>
      </div>
      {modal && <FormModal name={"User"} set={setModal}/>}
    </>
  );
}
