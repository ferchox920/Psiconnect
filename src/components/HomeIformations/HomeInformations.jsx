import style from "./index.module.css";
import conectateimg from '../../assets/Conectate.svg';
import agendaimg from '../../assets/Agenda.svg';
import especialistaimg from '../../assets/Especialista.svg';


export default function HomeInformations() {
  return (
    <div className={style.container}>
      <h1>¿Qué es Psiconnect?</h1>
      <p>
        Psiconnect es un servicio de atención psicológica online que permite
        conectarte con profesionales altamente calificados desde la comodidad de
        tu casa, brindandote acompañamiento y soporte para afrontar los
        problemas del día a día
      </p>
      <div className={style.cardscontainer}>
        <div>
          <div className={style.cards}>
            <img className={style.img} src={conectateimg} alt="" />
            <div>
              <h3>Conectate</h3>
              <p>Contamos con un gran alcance 
                para que puedas recibir nuestra ayuda estés donde estés.</p>
            </div>
          </div>
        </div>
        <div>
          <div className={style.cards}>
            <img className={style.img} src={agendaimg} alt="" />
            <div>
              <h3>Agenda una cita</h3>
              <p>Puedes entablar conversaciones con el profesional y recibir notificaciones para estar siempre al tanto de las novedades.</p>
            </div>
          </div>
        </div>
        <div>
          <div className={style.cards}>
            <img className={style.img} src= {especialistaimg} alt="" />
            <div>
              <h3>Psicólogos Colegiados</h3>
              <p>Llevamos a cabo una rigurosa selección de psicólogos colegiados y con experiencia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
