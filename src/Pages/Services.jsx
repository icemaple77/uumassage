import "../Styles/Styles.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import add1 from "../Images/add1.jpg";

function Services() {
  return (
    <Container>
      <div className="top"></div>
      <div className="service">
        <Row>
          <h3 className="context-s">OUR SIGNATURE SERVICE</h3>
          <p className="title-md">Therapeutic + Deep Tissue Massage</p>
        </Row>
        <Row>
          <Col lg md={8} xs={12}>
            <p className="price">30 Minute $60 | 60 Minute $80</p>
            <p className="context-s">
              Our Therapeutic + Deep Tissue Massage sessions blend targeted
              bodywork to melt muscular tension with relaxation-focused massage
              to ease accumulated stress. Generally, firm/moderate pressure is
              used in therapeutic massage but can be adapted to a more gentle
              style as desired.
            </p>
            <p className="context-s">
              {" "}
              Deep Tissue sessions incorporate more targeted techniques using
              forearm + elbow work to address trigger points, chronic tension
              and muscular restriction due to injury or overuse.
            </p>
            <p className="context-s">
              Upon arrival, your Massage Therapist will discuss your pressure
              preferences and areas that need more focus work so that your
              session is always crafted to your specific needs.
            </p>
          </Col>
          <Col>
            <img className=" box" src={add1} alt="add1"></img>{" "}
          </Col>
        </Row>
      </div>
      <hr></hr>
      <div className="service">
        <Row>
          <Col>
            <img className=" box" src={add1} alt="add1"></img>{" "}
          </Col>
          <Col lg md={8} xs={12}>
            <h3 className="context-s">OUR RELX SERVICE</h3>
            <p className="title-md">Relaxation Massage.</p>
            <p className="price">30 Minute $40 | 60 Minute $60</p>
            <p className="context-s">
              Have professional massage techniques to help you relax your body.
            </p>
            <p className="context-s">
              Our Professional Masseuses: All masseuses are strictly trained and
              selected, and new masseuses join our team weekly. All our
              masseuses like pretty & sweet nurses, like angels, with soft
              smiles on our faces to provide the best professional massage
              services to you, release your stress after your tight work.
            </p>
            <p className="context-s">
              Our Massage Services: Meanwhile, all the masseuses are not only
              good at doing quality massage services but are elegant,
              young-looking and have nice professional personalities. We promise
              we always provide everything high-quality services (Luxurious
              place, high-class masseuses and excellent services) from here. We
              focus to bring you from head to toe massage care just like "enjoy
              and care of the emperor".
            </p>
          </Col>
        </Row>
      </div>
      <hr></hr>
      <div className="service">
        <Row>
          <Col lg md={8} xs={12}>
            <h3 className="context-s">OUR SPECIAL SERVICE</h3>
            <p className="title-md">Prostate Massage</p>
            <p className="price">30 Minute $100 | 60 Minute $150</p>
            <p className="context-s">
              Prostate massage therapy is a therapy that relieves the stagnation
              of prostatic secretions, improves local blood circulation, and
              promotes the absorption and subsidence of inflammation through
              regular massage of the prostate, drainage of prostatic fluid, and
              discharge of inflammatory substances.
            </p>
            <p className="context-s">
              The prostate massage method is especially suitable for the storage
              type and chronic bacterial prostatitis, where the glands are full,
              soft, and have more purulent secretions.
            </p>
            <p className="context-s">
              It is both a diagnostic and a treatment.
            </p>
          </Col>
          <Col>
            <img className=" box" src={add1} alt="add1"></img>
          </Col>
        </Row>
      </div>
      <Row></Row>
    </Container>
  );
}

export default Services;
