import { useEffect, useState } from 'react'
import './AreaSliderFilter.css'
import  Areas  from './Card/Areas.jsx'
import { getAreas } from '../../features/apiPetitions'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

export default function AreaSliderFilter(){

    const [areas, setAreas] = useState()
    console.log(areas, 'todas las areas')

    useEffect(
        ()=>{
            getAreas(setAreas)
        }
    , [])

    return(
        <div className='areas'>
            <div className='ondas'>
                <img src='' alt=''/>
            </div>
            <h1 className='titulo'>Areas</h1>
            <p className = 'parrafo'>Trabajamos para ayudarte con retos personales como los siguientes:</p>
            <div className='container'>
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    autoplay = {{
                        delay:4000,
                        disableOnInteraction : true
                    }}
                    navigation
                    pagination = {{
                        el: '.pagination',
                        clickable: true
                    }}
                    slidesPerView= {3}
                    >
                    {areas?.map( e => {
                            return(
                                <SwiperSlide key = {e.id}>
                                
                                <div clasName = 'card'>
                                {/* <Link to = {`/Professionals/${e.area}`}> */}
                                    <Areas img={e.image} area={e.area}/>
                                {/* </Link> */}
                                </div>
                                
                                </SwiperSlide>

                            )
                        })} 
                </Swiper>
            </div>
                <div className = 'pagination'>
            </div>
            
        </div>
    )
}