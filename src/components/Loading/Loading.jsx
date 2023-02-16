import React from 'react'
import style from "./Loading.module.css"

export default function Loading() {
    return (
        <div className={style.loadingContainer}>
            <img src="" alt="cerebrito cargando" />
            <span className={style.loadingText}>Espera un momento, por favor...</span>
        </div>
    )
}
