import { Carousel } from "react-responsive-carousel"

export default function FeaturedItemCarousel({ imageUrls }) {

    return(
        <div>
            <Carousel showThumbs={true} showArrows={true}>
                {imageUrls.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}