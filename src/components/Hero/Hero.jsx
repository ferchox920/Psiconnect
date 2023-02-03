import style from './index.module.css'
import React,{ useState }  from "react";
import hero from "../../assets/hero.png"
import FormModal from "../modals/Modals";


export default function Hero(){
    const [modal, setModal] = useState(null);
    const openModal = () => {
        setModal(true);
      };
    return(
        //navbar
        <div>
        <div className={style.container}>
            <div>
            <h2>Registrate!</h2>
            <img className={style.img} src={hero}  alt="" />
            <h4>y Pide tu hora ya!! </h4><h4>Nuestros profesionales te atenderan 100% Online.</h4>
                <button onClick={openModal}>
                    Agendar
                </button> 
            </div>
        </div>
        {modal && <FormModal name="User" set={setModal} />}
        </div>      
        //footer
    )
}