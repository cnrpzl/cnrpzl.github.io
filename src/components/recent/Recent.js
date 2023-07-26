import "./recent.css"
import TripData from "./TripData"

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
                <TripData
                img="https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                heading="Mumbai, India"
                text="Welcome to the vibrant city of Mumbai, where dreams come true and the pulse of India beats strongest. Join us on an unforgettable journey to this bustling metropolis, where ancient traditions blend seamlessly with modern marvels. Explore the captivating diversity of Mumbai as we take you on a whirlwind tour of its iconic landmarks, starting with the majestic Gateway of India and the historic Elephanta Caves. Immerse yourself in the city's rich cultural heritage as you wander through the narrow lanes of the bustling markets, such as Crawford Market and Colaba Causeway, where vibrant colors, aromatic spices, and intricate handicrafts will delight your senses. Discover the grandeur of Bollywood as we visit the famous Film City, where you might even catch a glimpse of your favorite stars. Indulge in the culinary delights of Mumbai, from street food delicacies like vada pav and pav bhaji to fine dining experiences overlooking the Arabian Sea. Experience the pulsating energy of Marine Drive, also known as the Queen's Necklace, as you stroll along the picturesque promenade. Our knowledgeable guides will ensure you don't miss out on the hidden gems of Mumbai, such as the lively nightlife of Bandra and the tranquil escape of Sanjay Gandhi National Park. Unearth the true essence of Mumbai as you embrace its spirit of resilience, ambition, and infinite possibilities. Book your trip now and embark on an extraordinary adventure in the heart of India's maximum city."
                />

                <TripData
                img="https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                heading="New York City, New York"
                text="Welcome to the city that never sleeps! Join us on an exhilarating journey to the captivating streets of New York, where dreams are born and the energy is electric. Prepare to be enthralled as we explore the iconic landmarks that define this world-renowned metropolis. Marvel at the towering beauty of the Statue of Liberty, a symbol of freedom and opportunity. Take in the breathtaking skyline from atop the Empire State Building, and feel the vibrant pulse of the city beneath your feet in Times Square, where bright lights and Broadway shows transport you to a world of imagination. Immerse yourself in the cultural melting pot of neighborhoods like Chinatown, Little Italy, and Harlem, where the rich tapestry of diverse cuisines, languages, and traditions create an unforgettable sensory experience. Shop to your heart's content on Fifth Avenue, and discover hidden gems in the charming boutiques of SoHo and Greenwich Village. Stroll through Central Park, an oasis in the midst of skyscrapers, and breathe in the tranquility of nature. Delight in the world-class museums and art galleries, such as the Metropolitan Museum of Art and the Museum of Modern Art, where masterpieces await your admiration. From the bohemian vibe of Brooklyn to the trendy streets of Williamsburg, New York offers a tapestry of experiences for every traveler. Let our knowledgeable guides show you the city's hidden gems and help you create memories that will last a lifetime. Book your trip now and get ready to be swept away by the magic and energy of the city that never ceases to inspire – New York!"
                />

                <TripData
                img="https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                heading="Sydney, Australia"
                text="
                Welcome to the stunning harbor city of Sydney, where beauty meets adventure and endless possibilities await you. Join us on an extraordinary journey to this iconic destination, renowned for its breathtaking landscapes, vibrant culture, and warm hospitality. Prepare to be enchanted as we explore the world-famous Sydney Opera House, a architectural masterpiece that graces the shores of Sydney Harbour. Immerse yourself in the laid-back beach culture as we visit the golden sands of Bondi Beach, where you can catch the perfect wave or simply relax under the sun. Take a leisurely stroll along the Sydney Harbour Bridge and soak in panoramic views of the glistening water, dotted with sailboats and ferries. Discover the rich history of The Rocks, the city's oldest neighborhood, where charming cobblestone streets and historic pubs tell stories of a bygone era. Indulge your senses at the bustling markets of Paddington and The Rocks, where you can find unique treasures and taste local delicacies. Uncover the natural wonders of the Blue Mountains, where lush forests, cascading waterfalls, and ancient rock formations create a breathtaking backdrop for adventure. Experience the vibrant arts and cultural scene at the Museum of Contemporary Art or catch a performance at the Sydney Theatre Company. Don't miss the chance to savor Sydney's diverse culinary scene, from fresh seafood at the Sydney Fish Market to multicultural delights in Chinatown. Our experienced guides will ensure you don't miss out on the hidden gems and local insights that make Sydney truly unforgettable. Book your trip now and embark on an extraordinary adventure in the heart of Australia's most vibrant city – Sydney!"
                />
            </div>
        </div>
    )
}


export default Trip