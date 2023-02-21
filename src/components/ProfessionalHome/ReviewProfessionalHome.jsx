import React from 'react'
import style from './ReviewProfessionalHome.module.css'
import { getAllReview } from '../../features/apiPetitions'
import { useEffect, useState  } from 'react'
import CardReviewHome from './CardReviewHome.jsx'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";





export default function ReviewProfessionalHome () {

    const [professionalReview, setProfessionalReview] = useState()
    console.log(professionalReview, 'review')
    const orderReview = professionalReview?.sort((a,b) => b.score - a.score)
    console.log(orderReview, 'ordenado')
    const filterOrderReview = orderReview?.filter( el => el.score >= 4)
    console.log(filterOrderReview, 'filter')
    const sliceReview = filterOrderReview?.slice(0,6)
    console.log(sliceReview, 'slice')

    useEffect(() => {
    getAllReview(setProfessionalReview)
}, [])

  return (
   <div className={style.container}> 
            <p className={style.title}>Profesionale destacados</p>
        {<Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            loop={true}
            slidesPerView={3}
        >   {sliceReview?.map(el => {
                return(
                    <SwiperSlide  >    
                    <div className={style.card}>
                      <CardReviewHome 
                        key={el.id}
                        avatar = {el.professional.avatar}
                        name={el.professional.name}
                        lastName={el.professional.lastName}
                        puntualidad={el.puntualidad}
                        trato={el.trato}
                        general={el.general}  
                        score = {el.score}   
                      />                    
                    </div>
                  </SwiperSlide>
            )})}
            </Swiper>}
        </div>
  
  )
}
