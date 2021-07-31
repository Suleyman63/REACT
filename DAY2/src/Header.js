import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home">React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
