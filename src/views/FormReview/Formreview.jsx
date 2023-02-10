import React from 'react'
import style from './Formreview.module.css'
import { getProfessionalById } from "../../features/apiPetitions";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { CheckCircle, InputRounded, Label } from '@mui/icons-material';

export default function Formreview  () {


    const scaleScore = [
      {label : 'Puntualidad',
       deficiente : 1,
       regular : 2,
       bueno: 3
      },

      // gi

      
    ]


    

    
  



  return (
   
      <form className = { style.formReview}>

        <div className = {style.indications}>
          <p className = {style.parrafoindications}>
            En psiconnect estamos comprometidos a prestar un servicio de entera calidad con los mejores profesionales, por lo que su opinión es muy importante para nosotros. Por favor califique al especialista de acuerdo al servicio que recibió.
          </p>
        </div>

      
          <div className={style.itemScore}>
              {
                scaleScore.map( el => (
                  <div >
                    <label htmlFor={el.label}>{el.label}</label>
                    <div>
                      <label htmlFor="">{el.deficiente}</label>
                    <input type="checkbox"  />
                    </div>
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                  </div>
                ))

              }

     
           
          </div>








       

        </form>
        

   

  )
}
