import AreaSliderFilter from "../../components/AreaSliderFilter/AreaSliderFilter";
import Hero from "../../components/Hero/Hero";
import ReviewProfessionalHome from  "../../components/ProfessionalHome/ReviewProfessionalHome"
import HomeInformations from "../../components/HomeIformations/HomeInformations";
import ScoredProfSlider from '../../components/ScoredProfSlider/ScoredProfSlider.jsx';
import style from "./home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <Hero />
      {/* <ScoredProfSlider /> */}
      <HomeInformations />
      <ReviewProfessionalHome/>
      <AreaSliderFilter />
    </div>
  );
}
