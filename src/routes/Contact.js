import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/Footer"
import ContactForm from "../components/contactform/ContactForm"

function Contact (){
    return (
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={"https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
            title="Contact"
            btnClass="hide"
            />
            <ContactForm/>
            <Footer/>
            </>
    )
}


export default Contact