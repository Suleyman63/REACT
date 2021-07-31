import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Component() {
  return (
    <div>
      <Navbar className="navbar" bg="danger" expand="lg">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav style={{ maxHeight: "100px" }} navbarScroll>
          <Nav.Link className="link" href="#action1">
            Home
          </Nav.Link>
          <Nav.Link className="link" href="#action2">
            About
          </Nav.Link>
          <NavDropdown
            className="link"
            title="Menu"
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">Gallery</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Location</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Contact</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Component;
