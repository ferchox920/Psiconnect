import style from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineArrowDown } from "react-icons/hi";
import { getProfessionalById } from "../../features/apiPetitions";
import cerebrito from "../../assets/Details/cerebritoconbombillos.svg";
import Chat from "../../components/Chat/Chat";
import Calendary from "../../components/Calendary/Calendary";
import FormModal from "../../components/modals/Modals";
import CardProfessional from "./CardDetails/CardProfessional";
import { createChat } from "../../features/firebase/chatsFeatures";
import firestore, {
  getConsultsProfessional,
  getContextProfessional,
} from "../../features/firebase/calendaryFeatures";
import { collection, onSnapshot } from "@firebase/firestore";

export default function Details() {
  const [professional, setProfessional] = useState({});
  const [contextProfessional, setContextProfessional] = useState();
  const [daysDisabled, setDaysDisabled] = useState();

  const [modal, setModal] = useState(null);
  const user = useSelector((state) => state.user.user);
  const dispacht = useDispatch();
  const viewref = useRef(null);

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
    getContextProfessional({
      professionalId: id,
      state: setContextProfessional,
    });
    getConsultsProfessional({ professionalId: id, state: setDaysDisabled });
  }, [id]);

  useEffect(
    () =>
      onSnapshot(
        collection(
          firestore,
          `context/${id}/times`
        ),
        (snapshot) => {
          setContextProfessional(snapshot.docs.map((doc) => doc.data()));
        }
      ),
    [id]
  );



  const handleClick = (e) => {
    e.preventDefault(e);
    viewref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.containdetails}>
      <div className={style.descriptionprof}>
        <CardProfessional
          image={professional?.avatar}
          name={professional?.name}
          lastName={professional?.lastName}
          areas={professional?.areas?.map((el) => el.area)}
          skills={professional?.skills?.map((el) => el.skills)}
          precio={professional.price}
          description={professional.description}
        />
        <button className={style.button} onClick={(e) => handleClick(e)}>
          <HiOutlineArrowDown className={style.arrow} />
        </button>
      </div>

      <div className={style.iconochat}>
        <Chat />
      </div>

      <div className={style.reviews}></div>

      <div ref={viewref} className={style.contcalendary}>
        <img className={style.cerebrito} src={cerebrito} alt="" />
        <div className={style.calendary__box}>
          <Calendary
            professionalId={id}
            price={professional.price}
            workingHours={
              contextProfessional?.workingHours || [
                "9:00 am",
                "10:00 am",
                "11:00 am",
                "12:00 pm",
                "13:00 pm",
                "14:00 pm",
                "15:00 pm",
                "16:00 pm",
                "17:00 pm",
              ]
            }
            freeDays={contextProfessional?.freeDays || []}
            daysDisabled={daysDisabled || []}
          />
        </div>
      </div>

      {/* <div className={style.container__botttom}>
            {modal && <FormModal name="User" set={setModal} />}
        </div> */}
    </div>
  );
}
