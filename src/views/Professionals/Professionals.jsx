import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfessionalsFilters } from "../../features/apiPetitions";
import ProfessionalsCard from "./Card/ProfessionalsCard";
import SearchBar from "./SearchBar";
import AreaSliderFilter from "../../components/AreaSliderFilter/AreaSliderFilter";
import style from './Professionals.module.css'

export default function Professionals() {
  const { area } = useParams();
  // agrege en redux el estado global de los profesionales para poder hacer los filtros dinamicos
  const dispatch = useDispatch();
  // en la const proffessionals contiene todos los profesionales por area

  const professionals = useSelector(
    (state) => state.professionals.FilterProfessional
  );

  useEffect(() => {  
    getProfessionalsFilters({
      state: dispatch,
      area: area ? area : null,
      type: "global",
    });
  }, [area]);
  console.log(professionals)

  return (
    <div>
      <AreaSliderFilter/>
      <SearchBar area={area}/>  
      <div className={style.containerProf}>
        {professionals && professionals.map((e,i) => (
         <ProfessionalsCard  key={i} id={e.id} name={e.name} lastName={e.lastName} email={e.email} avatar={e.avatar} skills={e.skills}/>))
        }
        {
          // barra de busqueda por nombre del profesional o especialdiad
          // filtros por areas (reciclar componente)
          //todos los profesionales
        }
      </div>
    </div>
  );
}
