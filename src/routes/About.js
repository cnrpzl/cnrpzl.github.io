import Navbar from "../components/navbar/navbar"
import Hero from "../components/hero/Hero"
import Footer from "../components/footer/Footer"
import AboutUs from "../components/about/AboutUs"

function About (){
    return (
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1641391282758-7eae20bcb631?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2010&q=80"
        title="About"
        btnClass="hide"
        // btnName=""
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}


export default About