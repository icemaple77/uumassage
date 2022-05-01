import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Styles.css";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Packages from "../Pages/Packages";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import GetFooter from "../Components/Footer";
import logo from "../Images/logo.png";
function NavigationBar() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" />
            Urban Unwind Massage
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Services">Services</Nav.Link>
              <Nav.Link href="/Packages">Packages</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Have a nice day!</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <GetFooter />
    </Router>
  );
}

export default NavigationBar;
