import style from "./index.module.css";

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
            <img className={style.img} src="http://2.bp.blogspot.com/_3VzUEunqqnY/TUj4kTJP5DI/AAAAAAAAH5E/HqXUQAiiee8/s1600/Mapa+Politico+latinoamericano+3.jpg" alt="latinAmerica" />
            <div>
              <h3>Disponible en toda Latinoamérica</h3>
              <p>Contamos con un gran alcance para que puedas recibir nuestra ayuda estés donde estés.</p>
            </div>
          </div>
        </div>
        <div>
          <div className={style.cards}>
            <img className={style.img} src="https://thumbs.dreamstime.com/z/tel%C3%A9fono-m%C3%B3vil-chat-signo-icono-en-estilo-c%C3%B3mico-mensaje-notificaciones-vector-ilustraci%C3%B3n-de-dibujos-animados-sobre-fondo-216235400.jpg" alt="chat" />
            <div>
              <h3>Chat personalizado para tí</h3>
              <p>Puedes entablar conversaciones con el profesional y recibir notificaciones para estar siempre al tanto de las novedades.</p>
            </div>
          </div>
        </div>
        <div>
          <div className={style.cards}>
            <img className={style.img} src="data:image/jpeg;base64,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" alt="diploma" />
            <div>
              <h3>Psicólogos colegiados</h3>
              <p>Llevamos a cabo una rigurosa selección de psicólogos colegiados y con experiencia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
