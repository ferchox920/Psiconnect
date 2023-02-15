import style from "./Details.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfessionalById } from "../../features/apiPetitions";
import Calendary from "../../components/Calendary/Calendary";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../components/modals/Modals";
import  CardProfessional  from './CardDetails/CardProfessional'
import {
  createChat,

} from "../../features/firebase/chatsFeatures";

export default function Details() {
  const [professional, setProfessional] = useState({});
  const [modal, setModal] = useState(null);
  const user = useSelector((state) => state.user.user);
  const dispacht = useDispatch();

  const openModal = () => {
    setModal(true);
  };
  const startChat = () => {
    createChat({
      user,
      professional,
      state: dispacht,
    });
  };
  const { id } = useParams();
  useEffect(() => {
    getProfessionalById(id, setProfessional);
  }, [id]);

  return (
      <div className={style.containdetails}>
          <div className={style.descriptionprof}>
          <CardProfessional image = {user?.avatar}/>
        


          </div>
          <div className={style.reviews}>
              
          </div>

        
        <div className={style.contcalendary}>
        <div className={style.calendary__box}>
          <Calendary professionalId={professional.id} />
        </div>

        </div>
       


      <div className={style.container__botttom}>
        
       

        {modal && <FormModal name="User" set={setModal} />}
      </div>


      </div>

       
 
    

      
   
  );
}
