import "../Styles/Styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import CarouselBanner from "../Components/CarouselBanner";
function Home() {
  return (
    <div>
      <CarouselBanner />
      <Container>
        <CarouselBanner />

        <Row>
          <h1 className="title">NAVIGATE</h1>
          <h3 className="title-small">UUmassage</h3>
        </Row>
        <div className="h50"></div>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
