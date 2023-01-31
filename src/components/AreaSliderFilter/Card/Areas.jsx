import { Link } from 'react-router-dom'

export default function Areas(props){
    return(
        <section>
            <Link>
                <img src={props.img} alt={props.area} />
            </Link>
            <h2>{props.area}</h2>
        </section>
    )
}