import ContactInformation from "../../components/ContactInformation";
import ContactForm from "../../components/ContactUsForm";
import FollowUs from "../../components/FollowUs";
import Navbar from "../../components/Navbar";
import PermanentFooter from "../../components/PermanentFooter";

function ContactUs(){
    return(
        <div>
            <Navbar />
            <ContactForm />
            <div className=" background_second_main flex flex-row">
            

           </div>
            <PermanentFooter />
        </div>
    )
}
export default ContactUs;