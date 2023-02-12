import React from 'react'
import style from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div>
            <section className={style.errorContainer}>
                <div className={style.errorTextSide}>
                    <span className={style.errorTitle}>Descuida, no eres tu...</span>
                    <span className={style.errorText}>Somos nosotros. La informacion que buscas no esta disponible por el momento.<br />Disculpanos por los inconvenientes!</span>
                </div>
                <img className={style.errorImg} src="aqui va la img del cerebrito en modo error" alt="cerebrito en modo error" />
            </section>
        </div>
    )
}

export default ErrorPage
