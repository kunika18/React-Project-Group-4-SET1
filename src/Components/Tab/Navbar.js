import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Import custom CSS
import { ToastContainer, toast } from 'react-toastify';

const NavBar = ({ userName, onLogout }) => {
  const navigate = useNavigate();
  const notify = () => toast("Successfully Logged out");

  const handleLogout = () => {
    e.preventDefault(); // Prevent the default form submission
    notify();
    setTimeout(() => {
      navigate('/');
  }, 500);
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
          <Button type ="submit" variant="danger" onSubmit={handleLogout} className="logout-button">
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
