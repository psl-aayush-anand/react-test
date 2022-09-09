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

// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";

// function App() {
//   const [showModal, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{ height: "100vh" }}
//       >
//         <Button variant="primary" onClick={handleShow}>
//           + Add Project
//         </Button>
//       </div>
//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap'
import axios from 'axios';
import Pagination from './components/Pagination';
import { useEffect, useState } from 'react';

function App() {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState([false]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
     setLoading(true);
     const res = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
     setPosts(res.data);
     setLoading(false);

    }

    fetchPosts();
  }, []);

//Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </>
  );
}

export default App;

