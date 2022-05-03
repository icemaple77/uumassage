import { Col, Container, Row } from "react-bootstrap";
import place from "../Images/place.png";
import pfooter from "../Images/pfooter.png";
import efooter from "../Images/efooter.png";
import hr from "../Images/hr.jpg";
import "../Styles/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function ContactUs() {
  return (
    <div>
      <Container>
        <Row>
          {" "}
          <div className="margin"></div>
          <img alt="" src={hr} />
        </Row>
        <Row>
          <h3 className="textleft">
            If you have any questions, or you'd like to make a booking, get in
            touch.
          </h3>
          <h3 className="textleft">
            We look forward to welcoming you to our tranquil sanctuary. We hope
            you'll enjoy a wonderful mental and physical getaway.
          </h3>
        </Row>
        <div className="margin"></div>
        <Row>
          <h2>Urban Unwind Massage</h2>
          <Col>
            <img alt="" src={place} />
            Shop 1/18-20 Johnson Rd, Hillcrest QLD 4118
          </Col>
          <Col>
            <img alt="" src={pfooter} />
            0468851559
          </Col>
        </Row>
      </Container>
    </div>
    // <div>
    //   <Container>
    //     <Row>
    //       <div className="mardin"></div>
    //       <img alt="" src={hr} />
    //     </Row>

    //     <Row>
    //       <h3>
    //         If you have any questions, or you'd like to make a booking, get in
    //         touch.
    //       </h3>
    //
    //     </Row>
    //     <div className="mardin"></div>
    //     <Row>
    //       {" "}
    //       <h2>Urban Unwind Massage</h2>
    //       <Col>
    //         <img alt="" src={place}>
    //           Shop 1/18-20 Johnson Rd, Hillcrest QLD 4118{" "}
    //         </img>
    //       </Col>
    //       <Col>
    //         {" "}
    //         <img alt="" src={pfooter}>
    //           0468851559{" "}
    //         </img>
    //       </Col>
    //       <Col>
    //         {" "}
    //         <img alt="" src={efooter}>
    //           UUmassage
    //         </img>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
}
export default ContactUs;
