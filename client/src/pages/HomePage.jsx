import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Services from "../components/Service"
import FoodCourt from "../components/FoodCourt"
import TodaySpecial from "../components/TodaySpecial"
import Menu from "../components/Menu"
import Footer from '../components/Footer'
const HomePage = () =>{
    return(
        <>
        <Navbar />
        <HeroSection />
        <Services/>
        <FoodCourt />
        <Menu/>
        <TodaySpecial />
        <Footer/>
        </>
    )
}
export default HomePage