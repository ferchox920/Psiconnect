import logo from "../../assets/Whatsapp.svg";
import style from "./whatsapp.module.css"

const Whatsapp = () => {

    const Mensaje = () => { window.location.href = 'https://api.whatsapp.com/send?phone=+5491135875853&text=hola%20mi%20amor'}
    return(
        <div className = {style.container} onClick= {Mensaje}>
            <img src={logo} alt="" />
        </div>
    )

}

export default Whatsapp;