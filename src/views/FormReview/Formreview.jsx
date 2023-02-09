import React from 'react'
import style from './Formreview.module.css'
import { getProfessionalById } from "../../features/apiPetitions";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function Formreview  () {
    const [profesional, setProfessional] = useState({});
    const { id } = useParams();
    console.log(profesional, 'profesional')




    const scaleScore = {
      Deficiente : 1,
      Regular : 2,
      Bueno : 3,
      muyBueno : 4,
      Excelente : 5
    }


    useEffect(() => {
      getProfessionalById(id, setProfessional);
    }, []);




  return (
    <div className = {style.formreview}>

        <div className = {style.indications}>
          <p className = {style.parrafoindications}>
            En psiconnect estamos comprometidos a prestar un servicio de entera calidad con los mejores profesionales, por lo que su opinión es muy importante para nosotros. Por favor califique a su especialista de acuerdo al servicio que recibio.

          </p>
        </div>

        <div className = {style.escala}>

        </div>

        <form className = { style.formReview}>

        <div className = {style.comments}>

        <input 
           type= 'email'
           placeholder= 'Score'
           name = 'score'
           value = ''
            >
           </input>

          
           <input 
           type = 'text'
           placeholder= 'Deja tu comentario'
           name = 'comments'
           value = ''
            >
           </input>

           <input 
           type= 'number'
           placeholder= 'userId'
           name = 'score'
           value = ''
            >
           </input>





        </div>
        <div className = {style.comments}></div>

        </form>
        

    </div>

  )
}
