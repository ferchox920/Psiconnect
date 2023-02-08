import React from 'react'
import style from './Formreview.module.css'
import { getProfessionalById } from "../../features/apiPetitions";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function Formreview  () {
    const [profesional, setProfessional] = useState({});
    const { id } = useParams();
    console.log(profesional, 'profesional')


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
           value = {'useremail'}
            >
           </input>

           <input 
           type= 'email'
           placeholder= 'Score'
           name = 'score'
           value = {profesional.email}
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
           placeholder= 'Score'
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
