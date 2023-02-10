import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Professionals/pagination.jsx";
import ProfessionalsCard from "../Professionals/Card/ProfessionalsCard";
import { useEffect, useState } from "react";
import style from "./Users.module.css";
import SearchBar from "../Professionals/SearchBar.jsx";


export default function Users() {
    const professionals = useSelector(
        (state) => state.professionals.FilterProfessional
      );

    const [currentPage, setCurrentPage] = useState(1);
    const [ProfessionalsPerPage, setProfessionalsPerPage] = useState(8);
    const indexOfLastProfessional = currentPage * ProfessionalsPerPage;
    const indexOfFirstProfessional =
      indexOfLastProfessional - ProfessionalsPerPage;
  

    return(
    <div className={style.container}>
        <h1 className={style.titulo}>Usuarios</h1>
          <p className={style.parrafo}>
            Busca al professional que mas te guste:
          </p>
    
        <div className={style.containerSearchBar}>
          <SearchBar />
        </div>

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