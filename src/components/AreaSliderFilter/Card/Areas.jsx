import { Link } from 'react-router-dom'
import './Areas.css'

export default function Areas(props){
    return(
        <div className='container'>
            
        <div className = 'card'>
                <Link to = {`/Professionals/${props.area}`}>
                <div className = 'image'>
                <img  src={props.img} alt={props.area} />   
                </div>
                </Link>
                <div classname = 'titulo'>
                <h2 className='titulo'>{props.area}</h2>
                </div>
        </div>

        </div>
    )
}