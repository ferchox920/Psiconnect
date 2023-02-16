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

      
      
    ]


    

    
  



  return (

    <div className = {style.containerform}>
        <form className = { style.formReview}>

      

     
           
        








       

        </form>
    </div>
   
        

   

  )
}
