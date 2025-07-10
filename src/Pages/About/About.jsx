import AboutBody from "../../components/AboutBody";
import Accordion from "../../components/Accordion";
import GlowingTextComponent from "../../components/GlowingTextComponent/indes";
import Navbar from "../../components/Navbar";
import PermanentFooter from "../../components/PermanentFooter";

function About(){
    return(
        <div className="background_main">
            <Navbar />
            <AboutBody />
            
            <div className="background_fourth_main">
            <GlowingTextComponent />
            <Accordion />
            </div>
            <PermanentFooter />
        </div>
    )
}
export default About;