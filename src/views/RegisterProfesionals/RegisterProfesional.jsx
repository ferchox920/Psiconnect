import React from "react";
import style from "./RegisterProfesional.module.css";
import psicologia from "../../assets/Asistencia/LogoPsicologia.svg";
import RegisterPsico from "../../components/RegisterPsico/RegisterPsico";

const RegisterProfesional = () => {
  return (
    <>
      <div className={style.container}>
        <h3 className={style.title}>¿Quieres Trabajar con nosotros?</h3>
        <div className={style.info}>
          <div>
            <p className={style.parrafo}>
              Estamos buscando psicólogos comprometidos y apasionados
              para unirse a su equipo. Como empresa en crecimiento, ofrecemos
              servicios de psicoterapia a todas las edades y necesidades. Si
              eres un profesional experimentado motivado por mejorar el
              bienestar emocional y mental de los pacientes, eres el candidato
              ideal. Valoramos la capacidad de trabajo en equipo, la
              flexibilidad y la iniciativa para implementar nuevas ideas y
              técnicas.
            </p>

            <p className={style.parrafo}>
              En Psiconnect, estamos entusiasmados por conocer a profesionales
              como tú que comparten nuestra pasión por la psicología y el
              bienestar emocional. Nos encantaría conocer más acerca de ti, tus
              habilidades y experiencia, y cómo podrías aportar a nuestro equipo
              de trabajo.
            </p>
          </div>
          <div className={style.logo__psicologia}>
            <img
              src={
                "https://res.cloudinary.com/dcdywqotf/image/upload/v1676483326/Cerebritos%20svg/cerebtito_con_bombillos_dix3wp.svg"
              }
              alt="Psicologia"
            />
          </div>
        </div>
        <div className={style.secondInfo}>
          <div className={style.logo__psicologia}>
            <img
              src={
                "https://altavozcultural.files.wordpress.com/2019/11/cerebrito-e1530386527667.png"
              }
              alt="Psicologia"
            />
          </div>
          <div>
            <h3 className={style.titulo}>Para registrarte necesitamos:</h3>
            <p className={style.parrafo}>
              En Psiconnect requerimos algunos documentos para considerar la
              aplicación de nuevos profesionales. Estos documentos incluyen su
              credencial de colegiatura y su documento de identidad. También
              necesitaremos un enlace a su perfil de LinkedIn para corroborar su
              información. Todos los documentos serán manejados de manera
              confidencial y solo se utilizarán con fines laborales
            </p>
            <br />
            <h3 className={style.titulo}>Espera nuestra confirmacion</h3>
            <p className={style.parrafo}>
              Una vez que nos haya enviado todos los documentos solicitados,
              recibirá un correo electrónico donde se le explicará el
              procedimiento para subir la información requerida a nuestra
              plataforma de recursos humanos. Después de subir los documentos,
              nuestro equipo de recursos humanos verificará la información
              proporcionada, lo que puede tardar unos días. Le pedimos que tenga
              paciencia durante este proceso y, si tiene alguna pregunta, no
              dude en contactarnos. Agradecemos su interés en trabajar con
              nosotros y esperamos tener la oportunidad de colaborar en un
              futuro cercano.
            </p>
            <br />
          </div>
        </div>
        <div className={style.form__psico}>
          <RegisterPsico />
        </div>
      </div>
    </>
  );
};

export default RegisterProfesional;
