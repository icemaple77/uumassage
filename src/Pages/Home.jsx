import "../Styles/Styles.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import card1 from "../Images/card1.jpg";
import card2 from "../Images/card2.jpg";
import card3 from "../Images/card3.jpg";
import CarouselBanner from "../Components/CarouselBanner";
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
        <Row></Row>
        <Row></Row>
        <Row></Row>
      </Container>
    </div>
  );
}

export default Home;
