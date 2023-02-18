import React from 'react'
import style from './Formreview.module.css'
import { getProfessionalById, createProfessionalReview } from '../../features/apiPetitions';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import cerebrito from '../../assets/Details/Cerebritoalegre.svg'

import swal from "sweetalert";


export default function Formreview  () {

  const navigate = useNavigate()
 
  const user = useSelector(store => store.user.user)
  const [professional, setProfessional ] = useState({})
  const { professionalId } = useParams()
  const [inputs , setInputs] = useState({
      comments: '',
      puntualidad: 0,
      trato : 0,
      general: 0,
      score : 0,
      userId : user? user.id : null,
      
  })

  const [error, setError] = useState({
      comments: '',
      puntualidad: 0,
      trato : 0,
      general: 0,
      score : 0,
  })


  useEffect(() => {  
    getProfessionalById( professionalId , setProfessional);
  }, []);


  const handlecommentsChange = (e) => {
      setInputs ({
        ...inputs,
        [e.target.name] : e.target.value
      })

      setError(validation({
        ...inputs,
        [e.target.name]: e.target.value,
      }))
  }

  const handlepuntualidadChange = (e) => {
    let value = [e.target.name];
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
    const promedio = (((value + inputs.trato + inputs.general) /3))
    setInputs({...inputs, [e.target.name] : value, score : promedio.toFixed(1) });
    
  };

  const handleTratoChange = (e) => {

    let value = [e.target.name];
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
    const promedio = ((inputs.puntualidad + value + inputs.general) /3)
    setInputs({...inputs, [e.target.name] : value, score : promedio.toFixed(1) });
    
  };

  const handlegeneralChange = (e) => {
    
    let value = [e.target.name];
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
    const promedio = ((inputs.puntualidad + inputs.trato + value) /3)
    setInputs({...inputs, [e.target.name] : value, score:promedio.toFixed(1) });
   
    
  };

  const handleSubmit = () => { 
    let error = validation(inputs)
    if(Object.entries(error) == 0){
     
      createProfessionalReview({...inputs, id : professionalId }) 
      swal({
        title: "!Gracias por calificar¡",
        text: `Enviado`,
        icon: "success",
      })

    }else
    swal({
      title: "Error!",
      text: Object.values(error)[0],
      icon: "error",
    })

    setInputs({
      comments: '',
      puntualidad: 0,
      trato : 0,
      general: 0,
      score : 0,
      
    })
    alert('Gracias por calificar su experiencia')
    navigate('/')
    
}
 
  return (

    <div className = {style.containerform}>
      <p className = {style.slogan}>Tu opinión es muy importante, <br/>
        <p className = {style.califica}>Califica tu experiencia y ayunos a mejorar.</p>
      
      </p>
      
        <form className = { style.formReview} onSubmit={handleSubmit}>

            <div className = {style.idUsercontainer}>
              <input 
               type='text' 
               id= '#idUser'
               className = {style.inputIdUser}
               placeholder='idUser'
               value = {`IdUser: ${user?.id}`} 
               name = 'userId'
               hidden
               disabled
               />
            </div>

            
            <div className = {style.idProfcontainer}>
           <input 
               type='text' 
               id= '#idProf'
               className = {style.inputIdUProf}
               placeholder='idUser'
               value = {`IdProf: ${professionalId}`}
               hidden
               name = 'professionalId'
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

               <div  className = {style.checkgeneral}>

                <label className = {style.labelgeneral}>General:</label>  

                <div className = {style.inputsgeneral}>
                <input 
                type='radio' 
                name='general' 
                value='Excelente' 
                className={style.checkbox}
                onChange={handlegeneralChange} />Excelente

                <input 
                type='radio' 
                name='general' 
                value='Muy Bueno' 
                className={style.checkbox}
                onChange={handlegeneralChange} />Muy Bueno
                
                <input 
                type='radio' 
                name='general' 
                value='Bueno' 
                className={style.checkbox}
                onChange={handlegeneralChange} />Bueno

                <input 
                type='radio' 
                name='general' 
                value='Regular' 
                className={style.checkbox}
                onChange={handlegeneralChange} />Regular
                
                <input 
                type='radio' 
                name='general' 
                value='Deficiente' 
                className={style.checkbox}
                onChange={handlegeneralChange} />Deficiente

               </div>
                </div>
            </div>
          </div>


          <div className={style.scores}>
            <div className = {style.puntualidadscore}>
            <label></label> 
            <input 
             type='number' 
             className={style.inputpuntualidadscore}
             value ={inputs.puntualidad}
             name = 'puntualidad'
             disabled
             hidden
             />
            </div>

            <div className = {style.tratoscore}>
            <label></label> 
            <input 
             type='number' 
             className={style.inputtratoscore}
             value ={inputs.trato}
             name = 'trato'
             hidden
             disabled
             />
            </div>

            <div className = {style.generalscore}>
            <label></label> 
            <input 
             type='number' 
             className={style.inputgeneralscore}
             value ={inputs.general}
             name = 'general'
             hidden
             disabled
             />
            </div>

            <div className = {style.score}>
            <label></label> 
            <input 
             type='number' 
             className={style.inputscore}
             name = 'score'
             value ={inputs.score}
             hidden
             disabled
             />
            </div>


          </div>

            <div className={style.containerDescription}>
            <textarea
            name='comments'
            placeholder='Deje un comentario'
            onChange={handlecommentsChange}
            className={style.description}
          ></textarea>

          </div>

        <button 
        className={style.button}
        type = 'submit'
        disabled = {Object.keys(validation(inputs)).length !== 0 ? true : false}
        onSubmit={handleSubmit}
        >Calificar
       </button>
      </form>


      <div className = {style.cerebrito}>
          <img className = {style.imgcerebrito}src={cerebrito} alt="" />
      </div>
      
    </div>
  )
}


const validation = (inputs) => {
let error = {}
if(!inputs.puntualidad) error.puntualidad = 'Por favor califique la puntualidad'
if(!inputs.trato) error.trato = 'Por favor califique el trato del profesional'
if(!inputs.general) error.general = 'Por favor califique que le parecio la consulta en rasgos generales'
if(!inputs.comments) error.comments = 'Por favor indique un breve comentario de su experiencia'
console.log(error)
return error

}

