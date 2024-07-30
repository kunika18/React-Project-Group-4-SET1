import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Import custom CSS

const NavBar = ({ userName, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing auth tokens)
    onLogout(); // Call the passed onLogout function
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid className="nav-container">
        <Nav className="welcome-nav mx-auto">
          <Navbar.Brand href="#" className="welcome-message">
            WELCOME User
          </Navbar.Brand>
        </Nav>
        <Nav className="ml-auto d-flex align-items">
          <Nav.Link href="#" className="bell-icon">
            <FaBell />
          </Nav.Link>
          <Button variant="danger" onClick={handleLogout} className="logout-button">
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
