import React from 'react'
import style from './CardReviewHome.module.css'
import ReactStars from 'react-rating-stars-component'


export default function CardReviewHome (props) {
    return (
      <div className={style.container}>
        <div className = {style.containercard}>
        <div className = {style.card}>
            <div className={style.containerimg}>
            <img className = {style.image} src={props.avatar} alt="" />
            </div>
            <div className = {style.nameLastName}>
            <p className = {style.name}>{`${props.name} ${props.lastName}`} </p>
            </div>   
            <div className = {style.puntualidad}>
              <label className={style.labelpuntualidad}>Puntualidad:</label>
              <div className = {style.starspuntualidad}>
                  <ReactStars 
                    classNames={style.compstart}
                    count = {5} 
                    activeColor= '#efb810' 
                    size = {25} 
                    value = {props.puntualidad} 
                    half = {false}
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
    
            <div className={style.score}>
              <p className={style.score}>Puntaje: {props.score}</p>
    
            </div>
    
    
    
        </div>
    
        </div>
      </div>
      )
    }