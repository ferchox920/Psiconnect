import { Link } from 'react-router-dom'

import style from './Areas.module.css'

export default function Areas(props){
    return(
        <div className={style.container}>
            
        <div className = {style.card}>
                <Link to = {`/Professionals/${props.area}`}>
                <div className = {style.image}>
                <img  src={props.img} alt={props.area} />   
                </div>
                </Link>
                <div classname = {style.titulo}>
                <h2 className= {style.titulo}>{props.area}</h2>
                </div>
        </div>

        </div>
    )
}