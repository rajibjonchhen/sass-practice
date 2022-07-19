import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./MyNavbar.scss";
import Brand from "../../assets/brand.png";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const [navLocation, setNavLocation] = useState("/")
  const navigate = useNavigate()
  const navLinkArray = [
    { text: "Home", link: "" },
    { text: "Services & Price", link: "services" },
    { text: "About Us", link: "about" },
    { text: "Products", link: "products" },
    { text: "Booking", link: "booking" },
    { text: "Contact", link: "contact" },
  ];

  useEffect(() => {
    handleNavigate("")
  },[])

  const handleNavigate = (changeLocation) => {
    setNavLocation(changeLocation)
    navigate(`/${changeLocation}`)
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="theme-background w-100" sticky="top">
      <Container>
        <Navbar.Brand className=" d-flex" href="#home" onClick={() => handleNavigate("")}>
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
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" class="navbar-toggler" />
        <Navbar.Collapse  id="responsive-navbar-nav" >
          <Nav   style={{marginLeft:"auto"}}>
            {navLinkArray.map((navlink, i) => (
              <span
                className={`nav-link pointer ${navLocation === navlink.link? "border-bottom":""}`}
                onClick={() => handleNavigate(navlink.link)}
              >
                {navlink.text}
              </span>
            ))}
          <span className="nav-link">

            <Button
            className="book-now-btn"
            href="https://da.fresha.com/a/natural-nails-kobenhavn-longangstraede-21-k7xden4l/booking"
            target="_blank"
            >
              Book Now
            </Button>
              </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
