import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProfessionalsFilters } from "../../features/apiPetitions";
import ProfessionalsCard from "./Card/ProfessionalsCard";
import style from "./index.module.css";
import Pagination from "./pagination.jsx";
import SearchBar from "./SearchBar";
import AreaSliderFilter from "../../components/AreaSliderFilter/AreaSliderFilter";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [ProfessionalsPerPage, setProfessionalsPerPage] = useState(8);
  const indexOfLastProfessional = currentPage * ProfessionalsPerPage;
  const indexOfFirstProfessional =
    indexOfLastProfessional - ProfessionalsPerPage;

  return (
    <div className={style.container}>
      <div className={style.containerSearchBar}>
        <SearchBar />
      </div>
      <AreaSliderFilter />
      {/*  
        // filtros por areas (reciclar componente) 
*/}
      <div className={style.cardContainer}>
        {professionals &&
          professionals
            .slice(indexOfFirstProfessional, indexOfLastProfessional)
            .map((e, i) => (
              <ProfessionalsCard
                key={i}
                id={e.id}
                name={e.name}
                lastName={e.lastName}
                email={e.email}
                avatar={e.avatar}
                skills={e.skills}
              />
            ))}
      </div>
      <Pagination
        ProfessionalsPerPage={ProfessionalsPerPage}
        allProfessionals={professionals?.length}
        currentPage={currentPage}
        paginado={setCurrentPage}
      />
    </div>
  );
}
