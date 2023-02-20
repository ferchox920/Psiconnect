import { useState, useEffect } from "react";
import { getBestProfessionals } from "../../features/apiPetitions";
import { containerDiv, largeDiv, sliderDiv,   } from './ScoredProfSlider.module.css';

const ScoredProfSlider = () => {

const [ professionals, setProfessionals ] = useState([])

useEffect(()=>{
    getBestProfessionals(setProfessionals)
},[])

    return(
        <div className={containerDiv}>
            <div className={sliderDiv} >
                <div className={largeDiv} >
                    <div className={divImg}>
                        <img 
                        className={sliderImg}
                        src='' 
                        alt=''
                        />
                    </div>
                    <div className={datasDiv}>
                        <h2>Nombre y Apellido</h2>
                        <h3>Area : DepresionEJEMPLO</h3>
                        <div>
                            {/* Aqui iria las estrellas*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoredProfSlider;