import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Import custom CSS

const NavBar = ({ userName, onLogout }) => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid className="nav-container">
        <Nav className="welcome-nav mx-auto">
          <Navbar.Brand href="#" className="welcome-message">
            WELCOME, {userName}
          </Navbar.Brand>
        </Nav>
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link href="#" className="bell-icon">
            <FaBell />
          </Nav.Link>
          <Button variant="danger" onClick={onLogout} className="logout-button">
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

