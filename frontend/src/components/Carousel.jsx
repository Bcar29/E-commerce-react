import { Carousel } from "react-bootstrap";
import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.jpg'
import img3 from '../assets/img/img3.jpg'

export default function CarouselComponent() {



    return (
        <Carousel>
            <Carousel.Item>
                <img src={img1} alt="" className="d-block w-100" style={{ height: "400px" }} />
                <Carousel.Caption>
                    <div className="carousel-caption bgslid  d-none d-md-block" style={{ backgroundColor: '#1b1a1a8f' }}>
                        <h5>Avec Alfa shop</h5>
                        <p>Explorez nos dernières collections et profitez de réductions exclusives !</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={img2} alt="" className="d-block w-100" style={{ height: "400px" }} />
                <Carousel.Caption>
                    <div className="carousel-caption bgslid  d-none d-md-block" style={{ backgroundColor: '#1b1a1a8f' }}>
                        <h5>Avec Alfa shop</h5>
                        <p>Explorez nos dernières collections et profitez de réductions exclusives !</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={img3} alt="" className="d-block w-100" style={{ height: "400px" }} />
                <Carousel.Caption>
                    <div className="carousel-caption bgslid  d-none d-md-block" style={{ backgroundColor: '#1b1a1a8f' }}>
                        <h5>Avec Alfa shop</h5>
                        <p>Explorez nos dernières collections et profitez de réductions exclusives !</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}