import { Card, Col, Button, Row } from "react-bootstrap";
import card1 from "../Images/card1.jpg";
import card2 from "../Images/card2.jpg";
import card3 from "../Images/card3.jpg";
function Cards() {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Title>Services</Card.Title>
            <Card.Text>
              We offer a wide range of services to your satisfaction.
            </Card.Text>
            <Button variant="dark" href="/Services">
              Services
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={card2} />
          <Card.Body>
            <Card.Title>Price</Card.Title>
            <Card.Text>
              We offer a wide range of services to your satisfaction.
            </Card.Text>
            <Button variant="dark" href="/Packages">
              Price
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={card3} />
          <Card.Body>
            <Card.Title>Our Team</Card.Title>
            <Card.Text>
              We offer a wide range of services to your satisfaction.
            </Card.Text>
            <Button variant="dark" href="/AboutUs">
              Our Team
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
export default Cards;
