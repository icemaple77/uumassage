import "../Styles/Styles.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../Images/Banner.jpg";
import Banner2 from "../Images/Banner2.jpg";
import Banner3 from "../Images/Banner3.jpg";
function CarouselBanner() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner} alt="First slide" />
        <Carousel.Caption>
          <h1>Urban Unwind Massage </h1>
          <p>
            Elegant environment. Professional technology. Different enjoyment.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="Second slide" />

        <Carousel.Caption>
          <h1>Best Experience</h1>
          <p>Deep enjoyment, reduce stress, relax body and mind.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide" />

        <Carousel.Caption>
          <h1>Embrace happiness every day</h1>
          <p>Pick up your phone now and start booking our services.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselBanner;
