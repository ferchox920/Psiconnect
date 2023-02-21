import { useState, useEffect } from "react";
import { getBestProfessionals } from "../../features/apiPetitions";
import CardReview from "../../views/Details/Review/CardReview";
import { Swiper, SwiperSlide } from "swiper/react";
import style from '../../views/Details/Review/CardReview.module.css';

const ScoredProfSlider = () => {

const [ professionals, setProfessionals ] = useState([])
const [ reviewProfessional, setReviewProfessional ] = useState([])
const [noreview, setNoreview] = useState(true);
const [loading, setLoading] = useState(true);

useEffect(()=>{
    getBestProfessionals(setProfessionals)
},[]);
// <div className={containerDiv}>
        //     <div className={sliderDiv} >
        //         <div className={largeDiv} >
        //         </div>
        //     </div>
        // </div>
    return(
        <div>
            {
            !noreview && !loading && (
            <Swiper
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
            >
              {reviewProfessional.map((el) => {
                return (
                  <SwiperSlide key={el.id}>
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
            )
        }
        </div>

    )
};

export default ScoredProfSlider;