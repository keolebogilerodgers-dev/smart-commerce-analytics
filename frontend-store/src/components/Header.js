import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaChartLine, FaUser } from 'react-icons/fa';

const Header = () => {
  const cartItems = 3; // Mock data

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <FaChartLine className="me-2" />
          SmartCommerce
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#deals">Today's Deals</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaShoppingCart size={20} />
              {cartItems > 0 && (
                <Badge 
                  pill 
                  bg="danger" 
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: '0.6rem' }}
                >
                  {cartItems}
                </Badge>
              )}
              <span className="ms-2 d-none d-lg-inline">Cart</span>
            </Nav.Link>
            
            <Nav.Link as={Link} to="/account">
              <FaUser size={18} />
              <span className="ms-2 d-none d-lg-inline">Account</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
