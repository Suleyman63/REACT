import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../index.css";

function MyNav() {
  return (
    <div>
      <Navbar className="p-4" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/kurslar">
                Kurslar
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/kisiler">
                Kisiler
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/iletisim">
                Iletisim
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;
