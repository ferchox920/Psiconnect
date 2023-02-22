import React from 'react'
import style from './ReviewProfessionalHome.module.css'
import { useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate()
    const [professionalReview, setProfessionalReview] = useState() 
    const orderReview = professionalReview?.sort((a,b) => b.score - a.score) 
    const filterOrderReview = orderReview?.filter( el => el.score >= 4)
    const sliceReview = filterOrderReview?.slice(0,6)
    console.log(sliceReview, 'slice')

    useEffect(() => {
    getAllReview(setProfessionalReview)
}, [])


  return (
   <div className = {style.container}>

        <p className={style.title}>Profesionales Destacados</p>

    <div className={style.containerswiper} > 
       
     {<Swiper
         modules={[Autoplay, Pagination]}
         autoplay={{
           delay: 5000,
           disableOnInteraction: true,
         }}
         pagination={{
           dynamicBullets: true,
         }}
         spaceBetween = {5}
         loop={true}
         slidesPerView={3}

     >   {sliceReview?.map(el => {
             return(
                 <SwiperSlide   className = {style['swiper-slice']}>    
                 <div className={style.card}>
                   <CardReviewHome 
                     key={el.id}
                     professionalId= {el.professionalId}
                     avatar = {el.avatar}
                     name={el.professionalName}
                     lastName={el.professionalLastName}
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
   </div>
   
  )
}
