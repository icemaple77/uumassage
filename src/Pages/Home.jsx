import "../Styles/Styles.css";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselBanner from "../Components/CarouselBanner";
import Cards from "../Components/Cards";

function Home() {
  return (
    <div>
      <CarouselBanner />
      <Container>
        <Row>
          <h1 className="title">Welcome to Urban Unwind Massage</h1>
          <p className="context">
            <br></br>
            Whether you need relief from pain or
            <br></br>
            emotional support during a difficult time,
            <br></br>
            Massage Therapy makes a difference.
          </p>
          <div className="h10"></div>
          <p className="context">IT'S POSSIBLE TO FEEL BETTER.</p>
          <h3 className="title-small">
            Our different services, let you have a different experience.
          </h3>
        </Row>
        <div className="h50"></div>
        <Row>
          <Cards />
        </Row>
        <div className="margin" />
        {/* <Row>
          <img alt="" src={hr} />
        </Row> */}
        <div className="margin" />
        {/* <Row>
          <According />
        </Row> */}
      </Container>
    </div>
  );
}

export default Home;
