import "../Styles/Styles.css";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselBanner from "../Components/CarouselBanner";
import Cards from "../Components/Cards";
import hr from "../Images/hr.jpg";
import According from "../Components/Introduction";
function Home() {
  return (
    <div>
      <CarouselBanner />
      <Container>
        <Row>
          <h1 className="title">Welcom to Urban Unwind Massage</h1>
          <h3 className="title-small">
            Our different services, let you have a different experience.
          </h3>
        </Row>
        <div className="h50"></div>
        <Row>
          <Cards />
        </Row>
        <div className="margin" />
        <Row>
          <img alt="" src={hr} />
        </Row>
        <div className="margin" />
        <Row>
          <According />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
