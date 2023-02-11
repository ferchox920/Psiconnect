import style from "./Details.module.css";
import zoom from "../../assets/Zoom.svg";
import meet from "../../assets/Meet.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfessionalById } from "../../features/apiPetitions";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import Calendary from "../../components/Calendary/Calendary";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../components/modals/Modals";
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
    <div className={style.container}>
      <div className={style.container__top}>
        <div className={style.detailproffesional}>
          <div className={style.imgageandtitle}>
            <div>
              <img
                className={style.imageDetails}
                src={professional.avatar}
                alt=""
              />
            </div>

            <div className={style.name}>
              <h1>
                {professional.name}
                {` ${professional.lastName}`}
              </h1>
              <div></div>

              <div className={style.subtitulo}>
                <h3>Perfil professional:</h3>
              </div>

              <div className={style.description}>
                <div>
                  <p className={style.paragraph}>
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi in enim fringilla, auctor velit in, tempus massa.
                    Aliquam id arcu ut est ullamcorper dapibus quis et felis.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Proin dapibus erat
                    malesuada tincidunt ultricies. Integer id leo at odio
                    egestas blandit. Integer posuere consequat dapibus. Sed
                    facilisis justo diam. Aliquam id arcu ut est ullamcorper
                    dapibus quis et felis. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                    Aliquam id arcu ut est ullamcorper dapibus quis et felis.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.'
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.agendacita}>
          <h1 className={style.citas}>Agenda tu cita</h1>
          <div className={style.calendario}>
            <button
              className={style.reservahoy}
              onClick={user ? startChat : openModal}
            >
              Reserva hoy
            </button>
            <BsCalendar2Date className={style.iconocalendary}></BsCalendar2Date>
          </div>

          <div className={style.reviews}>
            <div className={style.comentary}>
              <h1>Puntualidad</h1>
              <h1>Buen trato</h1>
              <h1>Recomendacion</h1>
            </div>

            <div className={style.calification}>
              <div className={style.starline1}>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
              </div>
              <div className={style.starline2}>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
              </div>
              <div className={style.starline3}>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
                <AiOutlineStar className={style.stars}></AiOutlineStar>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.container__botttom}>
        <div className={style.calendary__box}>
          <Calendary professionalId={professional.id} />
        </div>
        <div className={style.pagar}>
        
            <h1>Precio</h1>
            <h1 className={style.precio}>50 Usd</h1>
            <button className={style.buttonpagar}>Reservar Cita</button>
     

          <div>
            <img className={style.zoom} src={zoom} alt="" />
          </div>
          <div className={style.meet}></div>
          <img className={style.meet} src={meet} alt="" />
        </div>

        {modal && <FormModal name="User" set={setModal} />}
      </div>
    </div>
  );
}
