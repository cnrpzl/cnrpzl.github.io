import Navbar from "../components/navbar/navbar"
import Hero from "../components/hero/Hero"
import Footer from "../components/footer/Footer"
import Trip from "../components/recent/Recent"
import TripData from "../components/recent/TripData"
import ServiceDetails from "../components/service/ServiceDetails"

function Service (){
    return (
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        title="Service"
        btnClass="hide"
        // btnName=""
        />
        <ServiceDetails/>
        {/* <TripData
        img="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        heading="Authentic Experiences"
        text="At constAnhedonia, we believe that travel is not merely a journey from one destination to another; it's a gateway to authentic connections with local cultures and cuisines. We are passionate about immersing our travelers in the heart and soul of each place they visit, fostering meaningful interactions that go beyond tourist attractions. Through carefully curated experiences, we encourage exploration of vibrant markets, hidden alleys, and charming local spots, where our guests can interact with the warm-hearted locals, understanding their traditions, and forging lifelong friendships. Our culinary adventures allow travelers to savor the tantalizing flavors of each region, indulging in the richness of local dishes prepared by skilled artisans. From bustling street food scenes to exquisite family-run restaurants, we embrace the diversity of culinary traditions, celebrating the essence of every culture through the universal language of food. At constAnhedonia, we believe in the transformative power of travel to create unforgettable memories and foster genuine connections that transcend borders and foster a global community bound by shared experiences and cherished moments."
        />

        <TripData
        img="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2003&q=80"
        heading="Preplanned Itineraries"
        text="We redefine the art of travel with our meticulously preplanned itineraries tailored to suit every guest's desires. We understand that each adventurer seeks a unique experience, and that's why we take pride in curating personalized journeys that resonate with your passions. Whether you crave the adrenaline rush of rock climbing or the thrill of catching the perfect wave while surfing, our itineraries are thoughtfully crafted to blend your interests seamlessly into the tapestry of your travel. With expert guides and top-notch equipment, embark on heart-pounding rock climbing escapades amidst breathtaking landscapes or ride the waves of the world's most stunning surf destinations. At constAnhedonia, we believe in delivering transformative experiences that leave you with unforgettable memories and a deeper connection to the destinations you explore. Let us be your companions on this extraordinary journey of self-discovery and adventure. Your dream escapade awaits!"
        />

        <TripData
        img="https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        heading="Space Travel"
        text="Discover the unimaginable with constAnhedonia's extraordinary space travel program. Take flight beyond the boundaries of Earth and experience the ultimate adventure as we put you in orbit for an awe-inspiring 24 hours. Our spacious and luxurious suites provide the perfect setting to marvel at the beauty of our planet from the vantage point of space. Enjoy a range of delectable snacks and refreshing sodas, curated to elevate your cosmic journey to new heights of comfort. Safety is our utmost priority, and our state-of-the-art technology and expert team ensure a secure and seamless voyage. Embrace the magic of weightlessness, witness breathtaking views, and create memories that will stay with you forever. constAnhedonia invites you to embark on a space odyssey like no other, where dreams become reality, and the cosmos becomes your playground. Prepare to redefine your perception of travel as you soar among the stars."
        /> */}
        <Footer/>
        </>
    )
}


export default Service