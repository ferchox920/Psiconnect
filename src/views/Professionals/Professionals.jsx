import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfessionalByAreas } from "../../features/apiPetitions";


export default function Professionals(){
    const { area } = useParams();

    const dispatch = useDispatch();
    const professionals = useSelector(state => state.professionals.FilterProfessional)
    useEffect(() => {
        getProfessionalByAreas({
            state:dispatch,
            area,
            type:'global'
        });
      }, [area]);
    

    return(
        <div>
            {
                professionals?.map(e => <h2>{e.name}</h2>)
            }
            {
                // barra de busqueda por nombre del profesional o especialdiad
                // filtros por areas (reciclar componente)
                //todos los profesionales
            }
        </div>
    )
}