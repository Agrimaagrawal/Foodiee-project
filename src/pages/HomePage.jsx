import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Services from "../components/Service"
import FoodCourt from "../components/FoodCourt"
import TodaySpecial from "../components/TodaySpecial"
const HomePage = () =>{
    return(
        <>
        <Navbar />
        <HeroSection />
        <Services/>
        <FoodCourt />
        <TodaySpecial />
        </>
    )
}
export default HomePage