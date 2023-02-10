import AreaSliderFilter from "../../components/AreaSliderFilter/AreaSliderFilter";
import Hero from "../../components/Hero/Hero";
import HomeInformations from "../../components/HomeIformations/HomeInformations";
import {  useSelector } from "react-redux";


export default function Home(){
  const user = useSelector((state => state.user.user));

    return(
        <div>
          { user? null : <Hero />}
            <AreaSliderFilter />
            <HomeInformations />
        </div>
    )
}