import React from 'react'
import style from './CardReview.module.css'
import ReactStars from "react-rating-stars-component";




export default function CardReview (props) {

  return (
    <div className = {style.containercard}>
    <div className = {style.card}>
        <p className = {style.name}>{`${props.name} ${props.lastName}`} </p>

        <div className = {style.puntualidad}>
          <label className={style.labelpuntualidad}>Puntualidad:</label>
          <div className = {style.starspuntualidad}>
              <ReactStars 
                classNames={style.compstart}
                count = {5} 
                activeColor= '#efb810' 
                size = {25} 
                value = {props.puntualidad} 
                half = {true}
              />  
          </div>
        </div>

        <div className = {style.trato}>
          <label className={style.labeltrato}>Trato:</label>
          <div className = {style.starspuntualidad}>
              <ReactStars 
                classNames={style.compstart}
                count = {5} 
                activeColor= '#efb810' 
                size = {25} 
                value = {props.puntualidad} 
                half = {true}
              />  
          </div>
        </div>

        <div className = {style.general}>
          <label className={style.labelgeneral}>General:</label>
          <div className = {style.starspuntualidad}>
              <ReactStars 
                classNames={style.compstart}
                count = {5} 
                activeColor= '#efb810' 
                size = {25} 
                value = {props.general} 
                half = {true}
              />  
          </div>
        </div>

        <div className={style.comments}>
          <p>{props.comments}</p>

        </div>



    </div>

    </div>
  )
}
