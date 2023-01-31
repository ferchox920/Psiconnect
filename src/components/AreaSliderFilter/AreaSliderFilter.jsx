import { useEffect, useState } from 'react'
import './AreaSliderFilter.css'
import Areas from './Card/Areas.jsx'
import { getAreas } from '../../features/apiPetitions'

export default function AreaSliderFilter(){

    const [areas, setAreas] = useState()

    useEffect(
        ()=>{
            getAreas(setAreas)
        }
    , [])

    return(
        <div className='areas'>
            <div className='ondas'>
                <img src="" alt="" />
            </div>
            <h1>Areas</h1>
            <p>Trabajamos para ayudarte con retos personales como los siguientes:</p>
            <div className='container'>
                {areas.map(area => {
                    return(
                        <Areas img={area.image} area={area.area}/>
                    )
                })}
            </div>
            
        </div>
    )
}