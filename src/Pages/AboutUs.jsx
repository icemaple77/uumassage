import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import staff1 from "../Images/staff1.jpg";
import staff2 from "../Images/staff2.jpg";
import staff3 from "../Images/staff3.jpg";
import staff4 from "../Images/staff4.jpg";
import staff5 from "../Images/staff5.jpg";
import staff6 from "../Images/staff6.jpg";
import staff7 from "../Images/staff7.jpg";
import Accordion from "../Components/Introduction";

function AboutUs() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="h50"></div>
          <Accordion></Accordion>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <div className="h50"></div>
        <p>
          ==========Girls❤️Changed Every Week=========
          <p>Monday： Yura&&June</p>
          <p>Tuesday： Cherry&&Ellie</p>
          <p>Wednesday： June&Natasha</p>
          <p>Thursday： Yura&June</p>
          <p>Friday： Summer&&Serena</p>
          <p>Saturday： Natasha&&Luna</p>
          <p>Sunday： Cherry&&Natasha</p>
        </p>
      </Row>
      <div className="h50"></div>
      <div className="box">
        <Row>
          <div className="col-3">
            <img className="box" src={staff6} alt="staff"></img>
          </div>
          <div className=" col-9">
            <p className="context-s ">
              ❤️Yura 19 Korea Age: 19. Student from Korea, petite and lovely,
              gentle character. Trained in traditional medicine. Have
              professional massage skills.
            </p>
          </div>
        </Row>
      </div>
      <div className="h50"></div>
      <div className="box">
        <Row>
          <div className=" col-9">
            <p className="context-s ">
              ❤️Natasha American 21 Professional masseur Plump body, good
              communication.
            </p>
          </div>
          <div className="col-3">
            <img className="box" src={staff3} alt="staff"></img>
          </div>
        </Row>
      </div>
      <div className="h50"></div>
      <div className="box">
        <Row>
          <div className="col-3">
            <img className="box" src={staff2} alt="staff"></img>
          </div>
          <div className=" col-9">
            <p className="context-s ">
              ❤️June Australia 32 Blonde petite athletic 10C She can provide a
              lot of fun experiences.
            </p>
          </div>
        </Row>
      </div>
      <div className="h50"></div>
      <div className="box">
        <Row>
          <div className=" col-9">
            <p className="context-s ">
              ❤️Summer Chinese 25 Professional masseur Petite and cute type
            </p>
          </div>
          <div className="col-3">
            <img className="box" src={staff1} alt="staff"></img>
          </div>
        </Row>
      </div>
      <div className="h50"></div>
      <div className="box">
        <Row>
          <div className="col-3">
            <img className="box" src={staff4} alt="staff"></img>
          </div>
          <div className=" col-9">
            <p className="context-s ">
              ❤️Luna 25 Vietnam Gentle and considerate, the feeling of first
              love.
            </p>
          </div>
        </Row>
      </div>
    </Container>
  );
}
export default AboutUs;
