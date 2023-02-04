import style from './Details.module.css'
import { useEffect, useState } from "react";
import LinesEllipsis from 'react-lines-ellipsis';
import { useParams } from "react-router-dom";
import { getProfessionalById } from "../../features/apiPetitions";

export default function Details() {


  const [profesional, setProfessional] = useState({});
  console.log(profesional, 'aqui')
  const { id } = useParams();


  useEffect(() => {
    getProfessionalById(id, setProfessional)
  }, []);



  return (
    <div className = {style.container}>

     
      <div className = {style.detailproffesional}>
        <div className={style.imgageandtitle} >

          <div>
            <img className = {style.imageDetails} src= {profesional.avatar} alt="" />
          </div>

            <div>
              <h1>{profesional.name}{` ${profesional.lastName}`}</h1>
            </div>

            <div className={style.subtitulo}>
              <h3>Perfil profesional:</h3>
            </div>

            <div className={style.description}>
              <div>
             <p className={style.paragraph}>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in enim fringilla, auctor velit in, tempus massa. Aliquam id arcu ut est ullamcorper dapibus quis et felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin dapibus erat malesuada tincidunt ultricies. Integer id leo at odio egestas blandit. Integer posuere consequat dapibus. Sed facilisis justo diam. Aliquam id arcu ut est ullamcorper dapibus quis et felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id arcu ut est ullamcorper dapibus quis et felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'</p>
              </div>

              <div className={style.moreInfo}>
              <button className = {style.readMore}>Leer+</button>
             </div>
            </div>

            

      </div>

      </div>






    </div>
  );
}
