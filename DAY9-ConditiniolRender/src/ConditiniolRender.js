import React, { useState } from "react";
import { Card, Button, Navbar } from "react-bootstrap";

const Kart = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1628067630818-fa3e19d96b27?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <Card.Body>
          <Card.Title>Recact</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <Navbar className="justify-content-center bg-dark p-3" fixed="bottom">
        <p className="text-light">Copyright-2021</p>
      </Navbar>
    </div>
  );
};

function ConditiniolRender() {
  const [goster, setGoster] = useState(false);

  function gosterGizle() {
    setGoster(!goster);
  }
  return (
    <div>
      <button className="btn btn-warning mt-5 p-2" onClick={gosterGizle}>
        GOSTER-GIZLE
      </button>
      {/* {shortcut mantigi} */}
      {/* {goster && <Kart />} */}
      {!goster && <Footer />}
      {goster || <Kart />}
    </div>
  );
}

export default ConditiniolRender;
