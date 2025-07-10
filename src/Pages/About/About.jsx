import AboutBody from "../../components/AboutBody";
import Accordion from "../../components/Accordion";
import GlowingTextComponent from "../../components/GlowingTextComponent/indes";
import Navbar from "../../components/Navbar";

function About(){
    return(
        <div className="background_main">
            <Navbar />
            <AboutBody />
            
            <div className="background_fourth_main">
            <GlowingTextComponent />
            <Accordion />
            </div>
        </div>
    )
}
export default About;