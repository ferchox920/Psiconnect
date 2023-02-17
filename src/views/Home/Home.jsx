import AreaSliderFilter from "../../components/AreaSliderFilter/AreaSliderFilter";
import Hero from "../../components/Hero/Hero";
import HomeInformations from "../../components/HomeIformations/HomeInformations";
import style from "./home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <Hero />
      <HomeInformations />
      <AreaSliderFilter />
    </div>
  );
}
