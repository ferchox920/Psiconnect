import React, { useEffect, useState } from "react";
import Areas from "./Card/Areas.jsx";
import { getAreas } from "../../features/apiPetitions";
import {  useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./AreaSliderFilter.module.css";


export default function AreaSliderFilter() {
  const [areas, setAreas] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    getAreas(setAreas);
  }, []);

  return (
    <div className={style.areas}>
      {pathname === "/" ? (
        <>
          <div className={style.ondas}>
            <img src={'https://res.cloudinary.com/dcdywqotf/image/upload/v1675267920/areas/Ondas_jha0ta.svg'} alt="ondas" />
          </div>
          <h1 className={style.titulo}>Areas</h1>
          <p className={style.parrafo}>
            Trabajamos para ayudarte con retos personales como los siguientes:
          </p>
        </>
      ) : null}
      
      <div className={style.container}>
        <Swiper
          modules={[ Autoplay,Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
              dynamicBullets: true,
          }}
          loop={true}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            // when window width is <= 768px
            900: {
              slidesPerView: 3,
            },
            550: {
              slidesPerView: 2,
            },
          }}
        >
          {areas?.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <div className={style.card}>
                  <Areas img={e.image} area={e.area} description={e.description} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
