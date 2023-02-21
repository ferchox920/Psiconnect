import style from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiOutlineArrowDown } from "react-icons/hi";
import {
  getProfessionalById,
  getProfessionalReview,
} from "../../features/apiPetitions";
import cerebrito from "../../assets/Details/cerebritoconbombillos.svg";
import paypal from "../../assets/Details/paypal.svg";
import Chat from "../../components/Chat/Chat";
import Calendary from "../../components/Calendary/Calendary";
import CardReview from "./Review/CardReview";
import FormModal from "../../components/modals/Modals";
import CardProfessional from "./CardDetails/CardProfessional";
import { createChat } from "../../features/firebase/chatsFeatures";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import firestore, {
  getConsultsProfessional,
  getContextProfessional,
} from "../../features/firebase/calendaryFeatures";
import { collection, onSnapshot } from "@firebase/firestore";
const cerebritomeditando =
  "https://res.cloudinary.com/dcdywqotf/image/upload/v1676483326/Cerebritos%20svg/Cerebritomeditando_iimsr6.svg";
export default function Details() {
  const [professional, setProfessional] = useState({});
  const [contextProfessional, setContextProfessional] = useState();
  const [daysDisabled, setDaysDisabled] = useState();
  const [reviewProfessional, setReviewProfessional] = useState();
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(null);

  const user = useSelector((state) => state.user.user);
  const dispacht = useDispatch();
  const viewref = useRef(null);

  const openModal = () => {
    setModal(!modal);
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
    getProfessionalReview(id, setReviewProfessional)  
    getContextProfessional({
      professionalId: id,
      state: setContextProfessional,
    });
    getConsultsProfessional({ professionalId: id, state: setDaysDisabled });
    
  }, [id,]);

  useEffect(
    () =>
      onSnapshot(collection(firestore, `context/${id}/times`), (snapshot) => {
        setContextProfessional(snapshot.docs.map((doc) => doc.data()));
      }),
    [id]
  );
  const handleCklicBuscar = (e) => {
    navigate("/Asistencia#searchprofessional");
  };

  setTimeout(() => {
    setLoading(false)

  }, 3000)

  const handleClick = (e) => {
    e.preventDefault(e);
    viewref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={style.containdetails}>
        <CardProfessional
          image={professional?.avatar}
          name={professional?.name}
          lastName={professional?.lastName}
          areas={professional?.areas?.map((el) => el.area)}
          skills={professional?.skills?.map((el) => el.skills)}
          precio={professional.price}
          description={professional.description}
          email={professional.email}
          linkedin={professional.linkedin}
          openModal={openModal}
          startChat={startChat}
          handleClick={handleClick}
          setOpenModal={setOpenLogin}
        />

        <div className={style.reviews}>

          {loading && <p className= {style.cargando}>Cargando calificaciones...</p>}

          {  reviewProfessional && reviewProfessional.length > 0  ?  (
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              spaceBetween={15}
              pagination={{
                dynamicBullets: true,
              }}
              loop={true}
              slidesPerView={3}
            >
              {reviewProfessional?.map((el) => {
                return (
                  
                  <SwiperSlide key={el.id} className = {style['swiper-slide']}>  
                   <div className={style.cardreview}>
                      <CardReview
                       
                        name={el.username}
                        lastName={el.lastusername}
                        puntualidad={el.puntualidad}
                        trato={el.trato}
                        general={el.general}
                        comments={el.comments}
                      />   
                      </div>                 
                  </SwiperSlide>
                  
                );
              })}
            </Swiper>
          ): (
            <div className={style.sincalificacion}>
              <p className={style.nohaycalf}>
                **Aún no hay calificaciones para este profesional**
              </p>
              <div className={style.mascota}>
                <img
                  className={style.imgmascota}
                  src={cerebritomeditando}
                  alt=""
                />
              </div>

              <div className={style.puedeschatear}>
                <div>
                  <button className={style.cta}>
                    <span>Inicia un chat en vivo</span>
                  </button>

                  <div className={style.iconochat2}>
                    <Chat />
                  </div>
                </div>
              </div>

              <div className={style.volver}>
                <button className={style.cta} onClick={handleCklicBuscar}>
                  <span>Seguir buscando</span>
                  <svg viewBox="0 0 13 10" height="30px" width="35px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={style.contImg}>
          <img className={style.cerebrito} src={cerebrito} alt="" />
          <div className={style.volver2}>
            <button className={style.cta} onClick={handleCklicBuscar}>
              <span>Seguir buscando</span>
              <svg viewBox="0 0 13 10" height="30px" width="35px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
          <img className={style.paypal} src={paypal} alt="" />
        </div>

        <div ref={viewref} className={style.contcalendary}>
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
            setOpenLogin={setOpenLogin}
          />
        </div>
      </div>
      {openLogin && <FormModal name="User" set={setOpenLogin} />}
      {modal && <Chat initialValue={modal} />}
    </>
  );
}
