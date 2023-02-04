import React, { useEffect, useState } from "react";
import Areas from "./Card/Areas.jsx";
import { getAreas } from "../../features/apiPetitions";
import { Link, useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
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
            {" "}
            <img src="" alt="" />
          </div>

          <h1 className={style.titulo}>Areas</h1>
          <p className={style.parrafo}>
            Trabajamos para ayudarte con retos personales como los siguientes:
          </p>
        </>
      ) : null}
      <div className={style.container}>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          navigation
          pagination={{
            el: ".pagination",
            clickable: true,
          }}
          slidesPerView={3}
        >
          {areas?.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <div className={style.card}>
                  {/* <Link to = {`/Professionals/${e.area}`}> */}
                  <Areas img={e.image} area={e.area} />
                  {/* </Link> */}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={style.pagination}></div>
    </div>
  );
}
