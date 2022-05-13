import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Styles.css";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Packages from "../Pages/Packages";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/Contactus";
import GetFooter from "../Components/Footer";
import logo from "../Images/logo.png";
function NavigationBar() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>
          <p>
            <img className="nav-text" src={logo} alt="logo" />
            <b className="nav-text">Urban Unwind Massage</b>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            {/* <Nav.Link href="/Packages">Packages</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link> */}
            <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Booking: 04 6885 1559, Have a nice day!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <GetFooter />
    </Router>
  );
}

export default NavigationBar;
