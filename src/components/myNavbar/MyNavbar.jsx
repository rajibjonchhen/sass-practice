import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./MyNavbar.scss";
import Brand from "../../assets/brand.png";

function MyNavbar() {
  const [navLocation, setNavLocation] = useState("/")
  const navLinkArray = [
    { text: "Home", link: "/" },
    { text: "Services & Price", link: "services" },
    { text: "About Us", link: "about" },
    { text: "Products", link: "products" },
    { text: "Booking", link: "booking" },
    { text: "Contact", link: "contact" },
  ];

  const handleNavigate = (changeLocation) => {
    setNavLocation(changeLocation)
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="theme-background w-100" sticky="top">
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
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav" >
          <Nav   style={{marginLeft:"auto"}}>
            {navLinkArray.map((navlink, i) => (
              <div
                className={`nav-link pointer ${navLocation === navlink.link? "border-bottom":""}`}
                onClick={() => handleNavigate(navlink.link)}
              >
                {navlink.text}
              </div>
            ))}

            <Button
            className="book-now-btn"
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
