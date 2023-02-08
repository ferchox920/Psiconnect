import AreaSliderFilter from "../../components/AreaSliderFilter/AreaSliderFilter";
import Hero from "../../components/Hero/Hero";
import HomeInformations from "../../components/HomeIformations/HomeInformations";
import Whatsapp from "../../components/whatsapp/whatsapp";
import Users from "../Users/Users";


export default function Home(){
    return(
        <div>
            <Hero />
            <AreaSliderFilter />
            <HomeInformations />
            <Whatsapp/>
            <Users/>
        </div>
    )
}