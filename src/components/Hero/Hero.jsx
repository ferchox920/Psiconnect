import style from './index.module.css'
import React from "react";
import { Link } from "react-router-dom";

export default function Hero(){

    return(
        //navbar
        <div>
        <div className={style.container}>
            <div>
            <h2>Registrate!</h2>
            <img className={style.img} src="https://www.nicepng.com/png/full/125-1257197_mujer-feliz-personas-sonriendo-png.png"  alt="diploma" />
            
            <h4>y Pide tu hora ya!! </h4><h4>Nuestros profesionales te atenderan 100% Online.</h4>
            <Link to="/user/register">
                <button>
                    Agendar
                </button> 
            </Link>
            </div>
        </div>
        </div>
        //footer
    )
}