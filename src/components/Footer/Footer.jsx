import style from './index.module.css'

export default function Footer(){
    return(
        <div className={style.position}>
            <div className={style.container}>
                <div className={style.left}>
                    <p>¿Necesitas ayuda?</p>
                </div>
                <div className={style.center}>
                    <p>Copyright ©2023 Psiconnect</p>
                </div>
                <div className={style.right}>
                    <p>Políticas de uso</p>
                </div>
            </div>
        </div>
    )
}