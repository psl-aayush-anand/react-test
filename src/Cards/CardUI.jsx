import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

import Logo from "../logo.svg";

const CreateCard = () => {
    return(
        <Card
      style={{ cursor: "pointer", width: "15rem" }}
  >
      <Card.Img variant="top" src={Logo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
}

export default CreateCard