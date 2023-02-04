import style from './Hero.module.css'
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
            <div className={style.heroContainer}>
                <div>
                    <img className={style.img} src={hero}  alt="" />
                </div>
                <div className={style.left}>
                    <h2>Registrate!</h2>
                    <h4>y Pide tu hora ya!! <br /> Nuestros profesionales te atenderan 100% Online. </h4>
                    <button className={style.button} onClick={openModal}>
                        Agendar
                    </button> 
                </div>
            </div>
        </div>
        {modal && <FormModal name="User" set={setModal} />}
        </div>      
        //footer
    )
}
