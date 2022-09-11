// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import CreateCard from "../Cards/CardUI";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import FormComponent from "../Components/Card_API/FormComponent";

function App() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [{items}, setItems] = useState({ items: [] });
  const addItem = () => {
    items.push(
          <Col key={items.length}>
            <CreateCard />
          </Col>
      );
    setItems({ items: [...items] });
  }
  return (
    <>
      <div className="button-div">
        <Button variant="primary" onClick={handleShow}  >
          + Add Project
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComponent />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addItem}>
            Click Me
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <React.Fragment>
        <Row>
          {items}
        </Row>
      </React.Fragment> */}
    </>
  );
}

export default App;

