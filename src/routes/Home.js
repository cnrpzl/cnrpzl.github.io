import Destination from "../components/destination/destination"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/navbar"
import Recent from "../components/recent/Recent"


function Home (){
    return (
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1687893721485-7cb3f9a83d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination."
        btnText="Travel Plan"
        url="/"
        btnClass="show"
        // btnName=""
        />

        <Destination/>

        <Recent/>

        <Footer/>
        </>
    )
}


export default Home