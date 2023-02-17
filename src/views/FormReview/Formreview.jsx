import React from 'react'
import style from './Formreview.module.css'
import { getProfessionalById } from '../../features/apiPetitions';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, InputRounded, Label } from '@mui/icons-material';

export default function Formreview  () {

  const user = useSelector(store => store.user.user)
  const [professional, setProfessional ] = useState({})
  const { id } = useParams()
  const [puntualidad, setpuntualidad] = useState(0);
  const [trato, setTrato] = useState(0);
  const [atencion, setAtencion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {  
    getProfessionalById( id , setProfessional);
  }, []);

  const handlepuntualidadChange = (e) => {
    let value = 0;
    switch (e.target.value) {
      case 'Excelente':
        value = 5;
        break;
      case 'Muy Bueno':
        value = 4;
        break;
      case 'Bueno':
        value = 3;
        break;
      case 'Regular':
        value = 2;
        break;
      case 'Deficiente':
        value = 1;
        break;
      default:
        value = 0;
    }
    setpuntualidad(value);
    setScore((value + trato + atencion) / 3);
  };

  const handleTratoChange = (e) => {
    let value = 0;
    switch (e.target.value) {
      case 'Excelente':
        value = 5;
        break;
      case 'Muy Bueno':
        value = 4;
        break;
      case 'Bueno':
        value = 3;
        break;
      case 'Regular':
        value = 2;
        break;
      case 'Deficiente':
        value = 1;
        break;
      default:
        value = 0;
    }
    setTrato(value);
    setScore(( puntualidad + value + atencion) / 3);
  };

  const handleatencionChange = (e) => {
    let value = 0;
    switch (e.target.value) {
      case 'Excelente':
        value = 5;
        break;
      case 'Muy Bueno':
        value = 4;
        break;
      case 'Bueno':
        value = 3;
        break;
      case 'Regular':
        value = 2;
        break;
      case 'Deficiente':
        value = 1;
        break;
      default:
        value = 0;
    }
    setAtencion(value);
    setScore((puntualidad + trato + value) / 3);
  };
 


  return (

    <div className = {style.containerform}>
        <form className = { style.formReview}>

            <div className = {style.idUsercontainer}>
              <input 
               type='text' 
               id= '#idUser'
               className = {style.inputIdUser}
               placeholder='idUser'
               value = {`IdUser: ${user?.id}`} 
               disabled
               />
            </div>

            
            <div className = {style.idProfcontainer}>
           <input 
               type='text' 
               id= '#idProf'
               className = {style.inputIdUProf}
               placeholder='idUser'
               value = {`IdProf: ${id}`}
               disabled
               />
            </div>

            <div className = {style.containerreputacion}>

           <div className = {style.nameProfcontainer}>
           <input 
               type='text' 
               id= '#idProf'
               className = {style.inputNameProf}
               placeholder='idUser'
               value = {`Nombre del Profesional: ${professional? professional.name: null} ${professional? professional.lastName: null}`}
               disabled
               />
            </div>

            <div className = {style.reputacions}>

               <div  className = {style.checpuntualidad}>
                Puntualidad: 
                <div className={style.inputspuntualidad}>
                <input 
                type='radio' 
                name='puntualidad' 
                value='Excelente' 
                className={style.checkbox}
                onChange={handlepuntualidadChange} />Excelente

                <input 
                type='radio' 
                name='puntualidad' 
                value='Muy Bueno'
                className={style.checkbox} 
                onChange={handlepuntualidadChange} />Muy Bueno
                
                <input 
                type='radio' 
                name='puntualidad' 
                value='Bueno' 
                className={style.checkbox}
                onChange={handlepuntualidadChange} />Bueno

                <input 
                type='radio' 
                name='puntualidad' 
                value='Regular' 
                className={style.checkbox}
                onChange={handlepuntualidadChange} />Regular
                
                <input 
                type='radio' 
                name='puntualidad' 
                value='Deficiente' 
                className={style.checkbox}
                onChange={handlepuntualidadChange} />Deficiente

               </div>
                </div>


               <div  className = {style.checkTrato}>
                <label className={style.labeltrato}> Trato: </label>

                <div className={style.inputstrato}>
                <input 
                type='radio' 
                name='trato' 
                value='Excelente' 
                className={style.checkbox}
                onChange={handleTratoChange} />Excelente

                <input 
                type='radio' 
                name='trato' 
                value='Muy Bueno' 
                className={style.checkbox}
                onChange={handleTratoChange} />Muy Bueno
                
                <input 
                type='radio' 
                name='trato' 
                value='Bueno' 
                className={style.checkbox}
                onChange={handleTratoChange} />Bueno

                <input 
                type='radio' 
                name='trato' 
                value='Regular' 
                className={style.checkbox}
                onChange={handleTratoChange} />Regular
                
                <input 
                type='radio' 
                name='trato' 
                value='Deficiente' 
                className={style.checkbox}
                onChange={handleTratoChange} />Deficiente

               </div>
                </div>

               <div  className = {style.checkAtencion}>

                <label className = {style.labelatencion}>Atencion:</label>  

                <div className = {style.inputsatencion}>
                <input 
                type='radio' 
                name='atencion' 
                value='Excelente' 
                className={style.checkbox}
                onChange={handleatencionChange} />Excelente

                <input 
                type='radio' 
                name='atencion' 
                value='Muy Bueno' 
                className={style.checkbox}
                onChange={handleatencionChange} />Muy Bueno
                
                <input 
                type='radio' 
                name='atencion' 
                value='Bueno' 
                className={style.checkbox}
                onChange={handleatencionChange} />Bueno

                <input 
                type='radio' 
                name='atencion' 
                value='Regular' 
                className={style.checkbox}
                onChange={handleatencionChange} />Regular
                
                <input 
                type='radio' 
                name='atencion' 
                value='Deficiente' 
                className={style.checkbox}
                onChange={handleatencionChange} />Deficiente

               </div>
                </div>
            </div>
          </div>


          <div className={style.scores}>
            <div className = {style.puntualidadscore}>
            <label>Puntualidad:</label> 
            <input 
             type='number' 
             className={style.inputpuntualidadscore}
             value ={puntualidad}
             name = 'puntualidad'
             disabled
             />
            </div>

            <div className = {style.tratoscore}>
            <label>Trato:</label> 
            <input 
             type='number' 
             className={style.inputtratoscore}
             value ={trato}
             name = 'trato'
             disabled
             />
            </div>

            <div className = {style.atencionscore}>
            <label>Atencion:</label> 
            <input 
             type='number' 
             className={style.inputatencionscore}
             value ={atencion}
             name = 'atencion'
             disabled
             />
            </div>

            <div className = {style.score}>
            <label>Score:</label> 
            <input 
             type='number' 
             className={style.inputscore}
             name = 'score'
             value ={score.toFixed(1)}
             disabled
             />
            </div>


          </div>

            <div className={style.containerDescription}>
            <textarea
            name='description'
            placeholder='Deje un comentario'
            className={style.description}
           
          ></textarea>
        </div>

     
           
        








       

        </form>
    </div>
   
        

   

  )
}
