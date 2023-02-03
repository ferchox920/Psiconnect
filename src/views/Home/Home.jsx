import AreaSliderFilter from "../../components/AreaSliderFilter/AreaSliderFilter";
import Hero from "../../components/Hero/Hero";
import HomeInformations from "../../components/HomeIformations/HomeInformations";
import Whatsapp from "../../components/whatsapp/whatsapp";


export default function Home(){
    return(
        <div>
            <Hero />
            <AreaSliderFilter />
            <HomeInformations />
            <Whatsapp/>
        </div>
    )
}