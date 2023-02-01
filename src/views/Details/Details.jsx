import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfessionalById } from "../../features/apiPetitions";

export default function Details() {
  const [profesional, setProfessional] = useState();
  const { id } = useParams();
  useEffect(() => {
    getProfessionalById(id, setProfessional)
  }, []);
  return (
    <div>
      { console.log(profesional)
        //aca no se como vamos a hacer, asi que estamos a la espera del diseño xd
      }
    </div>
  );
}
