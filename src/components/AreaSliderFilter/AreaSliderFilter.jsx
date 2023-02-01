import React, { useEffect, useState } from 'react'
import './AreaSliderFilter.css'
import Areas from './Card/Areas.jsx'
import { getAreas } from '../../features/apiPetitions'

export default function AreaSliderFilter(){

    const [areas, setAreas] = useState(null)

    useEffect(()=>{
        getAreas(setAreas)
    }, [])

    if(areas) {
        return(
            <div className='areas'>
                <div className='ondas'>
                    <img src="" alt="" />
                </div>
                <h1>Areas</h1>
                <p>Trabajamos para ayudarte con retos personales como los siguientes:</p>
                <div className='container'>
                    {areas.map((area) => {
                        return(
                            <Areas key={area.area} img={area.image} area={area.area}/>
                        )
                    })}
                </div>
            </div>
        )
    }else{
        return(
            <div>loading</div>
        )
    }
}