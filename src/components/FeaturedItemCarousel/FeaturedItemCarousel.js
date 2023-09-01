import { Carousel } from "react-responsive-carousel"
import './FeaturedItemCarousel.module.scss'

export default function ItemCarousel({ imageUrls }) {

    return(
        <div className="carousel">
            <Carousel showThumbs={true}>
                {imageUrls.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}