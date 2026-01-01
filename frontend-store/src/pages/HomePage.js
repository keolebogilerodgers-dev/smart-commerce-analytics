import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState({ revenue: 0, orders: 0 });

  useEffect(() => {
    // Mock data - in real app, fetch from API
    setProducts([
      { id: 1, name: 'Premium T-Shirt', price: 29.99, category: 'Clothing', image: 'https://via.placeholder.com/300x300/4CAF50/FFFFFF?text=T-Shirt' },
      { id: 2, name: 'Wireless Headphones', price: 89.99, category: 'Electronics', image: 'https://via.placeholder.com/300x300/2196F3/FFFFFF?text=Headphones' },
      { id: 3, name: 'Coffee Mug', price: 14.99, category: 'Home', image: 'https://via.placeholder.com/300x300/FF9800/FFFFFF?text=Mug' },
      { id: 4, name: 'Fitness Tracker', price: 49.99, category: 'Fitness', image: 'https://via.placeholder.com/300x300/E91E63/FFFFFF?text=Tracker' }
    ]);

    setStats({ revenue: 45280, orders: 324 });
  }, []);

  return (
    <Container className="py-4">
      {/* Hero Section */}
      <Row className="mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          <div className="p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold">SmartCommerce</h1>
            <p className="lead">Intelligent e-commerce with real-time analytics</p>
            <p>Built with React, Node.js, and Business Intelligence</p>
            <Button as={Link} to="/products" variant="light" size="lg">
              Shop Now
            </Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="p-4 border rounded">
            <h4>Live Business Stats</h4>
            <Row className="mt-3">
              <Col md={6} className="mb-3">
                <div className="p-3 bg-light rounded">
                  <h6 className="text-muted">Monthly Revenue</h6>
                  <h3 className="text-success">${stats.revenue.toLocaleString()}</h3>
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <div className="p-3 bg-light rounded">
                  <h6 className="text-muted">Total Orders</h6>
                  <h3 className="text-primary">{stats.orders}</h3>
                </div>
              </Col>
            </Row>
            <p className="text-muted small mt-3">
              This dashboard shows real-time analytics integration - 
              demonstrating Business Intelligence skills in action.
            </p>
          </div>
        </Col>
      </Row>

      {/* Featured Products */}
      <h2 className="mb-4">Featured Products</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={product.image} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-6">{product.name}</Card.Title>
                <Card.Text className="text-muted small">{product.category}</Card.Text>
                <div className="mt-auto">
                  <h5 className="text-primary">${product.price}</h5>
                  <Button 
                    as={Link} 
                    to={`/product/${product.id}`}
                    variant="outline-primary" 
                    size="sm" 
                    className="w-100"
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Business Intelligence Showcase */}
      <Row className="mt-5 pt-5 border-top">
        <Col md={8}>
          <h3>Built for Companies Like Alpha Direct & Debswana</h3>
          <p className="lead">
            This platform demonstrates skills that directly apply to corporate needs:
          </p>
          <ul>
            <li><strong>For Alpha Direct</strong>: B2B product management, bulk ordering, inventory analytics</li>
            <li><strong>For Debswana</strong>: Procurement workflows, budget tracking, compliance reporting</li>
            <li><strong>For any business</strong>: Real-time analytics, data-driven decisions, scalable architecture</li>
          </ul>
        </Col>
        <Col md={4} className="text-center">
          <div className="p-4 border rounded">
            <h5>Tech Stack Demonstrated</h5>
            <div className="mt-3">
              <span className="badge bg-primary me-2 mb-2">React</span>
              <span className="badge bg-success me-2 mb-2">Node.js</span>
              <span className="badge bg-info me-2 mb-2">MongoDB</span>
              <span className="badge bg-warning me-2 mb-2">Bootstrap</span>
              <span className="badge bg-danger me-2 mb-2">Analytics</span>
              <span className="badge bg-dark me-2 mb-2">Business Intelligence</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
