import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfessionalByAreas } from "../../features/apiPetitions";
import SearchBar from "./SearchBar";

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
    });
  }, [area]);

  return (
    <div>
      <SearchBar dispatch={dispatch}/>
      {professionals?.map((e) => (
        <h2>{e.name}</h2>
      ))}
      {
        // barra de busqueda por nombre del profesional o especialdiad
        // filtros por areas (reciclar componente)
        //todos los profesionales
      }
    </div>
  );
}
