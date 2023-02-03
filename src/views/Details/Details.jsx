import style from './Details.module.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfessionalById } from "../../features/apiPetitions";

export default function Details() {


  const [profesional, setProfessional] = useState();
  console.log(profesional, 'aqui')
  const { id } = useParams();


  useEffect(() => {
    getProfessionalById(id, setProfessional)
  }, []);


  return (
    <div className = {style.container}>
      






    </div>
  );
}
