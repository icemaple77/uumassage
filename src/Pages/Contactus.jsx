import { Col, Container, Row } from "react-bootstrap";
import place from "../Images/place.png";
import pfooter from "../Images/pfooter.png";
import efooter from "../Images/efooter.png";
import hr from "../Images/hr.jpg";
import "../Styles/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import map from "../Images/map.jpg";
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
          <p className="title">Urban Unwind Massage</p>
          <p className="content-s">
            If you have any questions, or you'd like to make a booking, get in
            touch.
          </p>
          <p className="content-s">
            We look forward to welcoming you to our tranquil sanctuary. We hope
            you'll enjoy a wonderful mental and physical getaway.
          </p>
        </Row>
        <div className="margin"></div>
        <img src={map}></img>
        <Row>
          <div className="content-s">
            <p>Trading Hours:</p>
            <p>Monday : 9:00 AM-9:00 PM</p>
            <p>Tuesday : 9:00 AM-9:00 PM</p>
            <p>Wednesday : 9:00 AM-10:00 PM</p>
            <p>Thursday : 9:00 AM-9:00 PM</p>
            <p>Friday : 9:00 AM-9:00 PM</p>
            <p>Saturday : 9:00 AM-10:00 PM</p>
            <p>Sunday : 9:00 AM-10:00 PM</p>
          </div>
        </Row>
        <div className="content-s">
          <Row>
            <Col>
              <img alt="" src={place} />
              Shop Address: Shop 1/18-20 Johnson Rd, Hillcrest QLD 4118
              <p> Walk-in or booking are all welcomed</p>
            </Col>
            <Col>
              <img alt="" src={pfooter} />
              Booking:0468851559
            </Col>
          </Row>
        </div>
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
