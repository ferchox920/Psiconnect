import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfessionalByAreas } from "../../features/apiPetitions";

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

  return (
    <div style={{"margin-top":"14rem","margin-bottom":"14rem", "border":"2px solid red","width":"100%", "heigth":"auto", "display":"flex","flex-direction":"column","align-items":"center"}}>
      {/*       // barra de busqueda por nombre del profesional o especialdiad
        // filtros por areas (reciclar componente) 
        */}
      <div style={{"border":"2px solid blue", "width":"90%"}}>
        {professionals?.map((e) => (
          <h2>{e.name}</h2>
        ))}
      </div>
      {
        //todos los profesionales
      }
    </div>
  );
}
