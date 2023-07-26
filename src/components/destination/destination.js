import DestinationData from "./DestinationData"
import "./destination.css"
const Destination = () => {
    return (
        <>
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p className="h1-des">Tours offer a convenient and immersive way to explore a destination, providing expert guidance, local insights, and a hassle-free experience.</p>
            <DestinationData
                className="first-des"
                heading="Buenos Aires, Argentina"
                text="Buenos Aires, the vibrant capital of Argentina, is a captivating metropolis that pulsates with energy, culture, and history. Known as the 'Paris of South America,' this cosmopolitan city boasts a unique blend of European elegance and Latin American charm. With its stunning architecture, wide boulevards, and leafy parks, Buenos Aires offers a captivating atmosphere that invites exploration. The city is renowned for its rich cultural heritage, manifested in its tango music and dance, which can be experienced in lively milongas and traditional performances. From the colorful neighborhood of La Boca with its iconic Caminito street to the trendy district of Palermo, each area has its own distinct character and allure. Food lovers will delight in the city's culinary scene, which offers a fusion of flavors influenced by Italian, Spanish, and indigenous cuisines. Whether strolling through the elegant Recoleta Cemetery, immersing in the passionate atmosphere of a football match at the legendary La Bombonera stadium, or simply savoring a traditional Argentine steak in a bustling parrilla, Buenos Aires never fails to captivate visitors. With its world-class museums, art galleries, and a vibrant nightlife that stretches into the early hours, the city provides a diverse range of experiences for every traveler. A journey to Buenos Aires promises a sensory feast of culture, history, and flavors, making it an irresistible destination for those seeking an immersive and unforgettable urban adventure in the heart of Argentina."
                img1={"https://images.unsplash.com/photo-1609080814811-5837f3c7095a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"}
                img2={"https://images.unsplash.com/photo-1481078222611-c0630e28dd4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1967&q=80"}
                alt1="Rocks on the beach"
                alt2="Jeep parked on beach sand"
            />
            <DestinationData
                className="first-des-reverse"
                heading="Grand Canyon National Park, Utah"
                text="Carved by the Colorado River over millions of years, this geological marvel features stunning cliffs, deep canyons, and vibrant rock formations. With its immense size, spanning approximately 277 miles in length, up to 18 miles in width, and reaching depths of over a mile, the Grand Canyon is a sight to behold. Traveling to this iconic destination offers an unforgettable experience for nature enthusiasts, adventure seekers, and photography enthusiasts alike. Exploring its vast expanse reveals a myriad of mesmerizing viewpoints, each offering unique perspectives and panoramic vistas. From hiking along scenic trails that wind through the rugged terrain to embarking on exhilarating river rafting trips through the canyon's depths, there are endless opportunities for outdoor exploration and adventure. Additionally, the Grand Canyon National Park provides educational programs, visitor centers, and interpretive exhibits, allowing visitors to delve into the fascinating geology, ecology, and cultural history of the area. Whether it's witnessing a spectacular sunrise or sunset casting an ethereal glow over the canyon, or simply being enveloped by its majestic presence, a journey to the Grand Canyon promises an awe-inspiring experience that will leave an indelible mark on the hearts of all who visit."
                img1={"https://images.unsplash.com/photo-1638062417185-9187c3aa1c1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"}
                img2={"https://images.unsplash.com/photo-1642730418112-9ba3ec240169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"}
                alt1="Red rocks at Utah"
                alt2="Landscape view of Utah"
            />
        </div>
        </>
    )
}


export default Destination