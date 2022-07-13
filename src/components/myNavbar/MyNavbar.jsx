import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./MyNavbar.scss";
import Brand from "../../assets/Screenshot 2022-07-13 at 01.06.21.png";

function MyNavbar() {
  const navLinkArray = [
    { text: "Home", navLink: "/" },
    { text: "Services & Price", navLink: "services" },
    { text: "About Us", navLink: "about" },
    { text: "Products", navLink: "products" },
    { text: "Booking", navLink: "booking" },
    { text: "Contact", navLink: "contact" },
  ];

  const handleNavigate = () => {};
  return (
    <Navbar collapseOnSelect expand="lg" className="theme-background" sticky="top">
      <Container>
        <Navbar.Brand className=" d-flex" href="#home">
          <div className="brand-img">
            <img src={Brand} alt="brand" style={{ width: "100%" }} />
          </div>
          <div className="d-flex flex-column">
            <span className="brand-name">Natural Nails</span>
            <span className="contact">
              naturalnailsdk@gmail.com 
            </span>
            <span className="contact">
              +45 52 39 31 37
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {navLinkArray.map((navlink, i) => (
              <div
                className="nav-link pointer"
                onClick={() => handleNavigate("")}
              >
                {navlink.text}
              </div>
            ))}

            <Button
              
              variant="outline-light"
              href="https://da.fresha.com/a/natural-nails-kobenhavn-longangstraede-21-k7xden4l/booking"
            >
              Book Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
