import "../Styles/Styles.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import According from "../Components/Introduction";
function Services() {
  return (
    <Container>
      <div className="top"></div>
      <Row></Row>
      <Row>
        <Col lg md={8} xs={12}></Col>
        <Col></Col>
      </Row>
      <Row></Row>
      <Row></Row>
    </Container>
  );
}

export default Services;
