import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfessionalByAreas } from "../../features/apiPetitions";
import ProfessionalsCard from "./Card/ProfessionalsCard";

export default function Professionals() {
  const { area } = useParams();
  // agrege en redux el estado global de los profesionales para poder hacer los filtros dinamicos
  const dispatch = useDispatch();
  // en la const proffessionals contiene todos los profesionales por area

  const professionals = useSelector(
    (state) => state.professionals.FilterProfessional
  );
  useEffect(() => {
    getProfessionalByAreas({
      state: dispatch,
      area,
      type: "global",
    })
  }, [area]);
  console.log(professionals)

  return (
    <div style={{"margin-top":"14rem","margin-bottom":"14rem", "border":"2px solid red","width":"100%", "heigth":"auto", "display":"flex","flex-direction":"column","align-items":"center"}}>
 {/*    // barra de busqueda por nombre del profesional o especialdiad
        // filtros por areas (reciclar componente) 
*/}
    <div style={{ display: 'flex', flexWrap: 'wrap', height:'600px'}}>
      {professionals && professionals.map((e,i) => (
        <ProfessionalsCard  key={i} id={e.id} name={e.name} lastName={e.lastName} email={e.email} avatar={e.avatar} skills={e.skills}/>
      ))}
      {
        //todos los profesionales
      }
    </div>
    </div>
  );
}
