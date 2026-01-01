import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaDollarSign, FaShoppingCart, FaUsers, FaChartLine,
  FaBox, FaStar, FaArrowUp, FaArrowDown 
} from 'react-icons/fa';

const Dashboard = () => {
  // Mock data for demonstration
  const metrics = [
    { 
      title: 'Revenue', 
      value: '$45,280', 
      change: 12.5, 
      icon: <FaDollarSign />, 
      color: 'primary' 
    },
    { 
      title: 'Orders', 
      value: '324', 
      change: 8.3, 
      icon: <FaShoppingCart />, 
      color: 'success' 
    },
    { 
      title: 'Customers', 
      value: '1,248', 
      change: 15.2, 
      icon: <FaUsers />, 
      color: 'info' 
    },
    { 
      title: 'Avg. Order', 
      value: '$139.75', 
      change: -2.1, 
      icon: <FaChartLine />, 
      color: 'warning' 
    }
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Smith', amount: 249.99, status: 'Delivered', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'Sarah Johnson', amount: 89.99, status: 'Processing', date: '2024-01-15' },
    { id: 'ORD-003', customer: 'Mike Wilson', amount: 429.50, status: 'Shipped', date: '2024-01-14' },
    { id: 'ORD-004', customer: 'Emma Davis', amount: 149.99, status: 'Pending', date: '2024-01-14' }
  ];

  const topProducts = [
    { name: 'Premium T-Shirt', sales: 12400, units: 413, growth: 12.5 },
    { name: 'Wireless Headphones', sales: 9850, units: 110, growth: 8.3 },
    { name: 'Fitness Tracker', sales: 7450, units: 149, growth: 15.2 },
    { name: 'Coffee Mug', sales: 3120, units: 208, growth: 5.7 }
  ];

  return (
    <Container fluid>
      <h1 className="h3 mb-4">Business Intelligence Dashboard</h1>
      
      {/* Key Metrics */}
      <Row className="mb-4">
        {metrics.map((metric, index) => (
          <Col key={index} xl={3} lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="text-muted mb-2">{metric.title}</h6>
                    <h3 className="mb-0">{metric.value}</h3>
                  </div>
                  <div className={`icon-shape icon-shape-${metric.color} rounded-circle`}>
                    <span className={`text-${metric.color}`}>{metric.icon}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className={`me-2 ${metric.change >= 0 ? 'text-success' : 'text-danger'}`}>
                    {metric.change >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                    {Math.abs(metric.change)}%
                  </span>
                  <span className="text-muted">vs last month</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Charts & Data */}
      <Row className="mb-4">
        <Col xl={8} className="mb-4">
          <Card className="border-0 shadow-sm h-100">
            <Card.Header className="bg-transparent border-0">
              <h5 className="mb-0">Revenue Trends</h5>
            </Card.Header>
            <Card.Body>
              <div className="p-4 text-center border rounded">
                <FaChartLine size={48} className="text-primary mb-3" />
                <p className="text-muted">
                  Revenue visualization chart would appear here
                </p>
                <p className="small text-muted">
                  Demonstrating integration with Chart.js or Recharts for business intelligence
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col xl={4} className="mb-4">
          <Card className="border-0 shadow-sm h-100">
            <Card.Header className="bg-transparent border-0">
              <h5 className="mb-0">Top Products</h5>
            </Card.Header>
            <Card.Body>
              {topProducts.map((product, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                  <div>
                    <h6 className="mb-1">{product.name}</h6>
                    <small className="text-muted">{product.units} units sold</small>
                  </div>
                  <div className="text-end">
                    <strong>${product.sales.toLocaleString()}</strong>
                    <div className={`small ${product.growth >= 0 ? 'text-success' : 'text-danger'}`}>
                      {product.growth >= 0 ? '+' : ''}{product.growth}%
                    </div>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Orders */}
      <Row>
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-transparent border-0 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Orders</h5>
              <a href="#view-all" className="btn btn-sm btn-outline-primary">View All</a>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map(order => (
                      <tr key={order.id}>
                        <td><strong>{order.id}</strong></td>
                        <td>{order.customer}</td>
                        <td>${order.amount}</td>
                        <td>
                          <span className={`badge bg-${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>{order.date}</td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Business Insights */}
      <Row className="mt-4">
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-light">
              <h5 className="mb-0">
                <FaChartLine className="me-2" />
                Business Insights
              </h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <div className="p-3 border rounded mb-3">
                    <h6>🚀 Growth Opportunity</h6>
                    <p className="small text-muted mb-0">
                      Fitness category shows 15.2% growth. Consider increasing inventory.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-3 border rounded mb-3">
                    <h6>⚠️ Attention Needed</h6>
                    <p className="small text-muted mb-0">
                      Average order value decreased by 2.1%. Review pricing strategy.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="p-3 border rounded mb-3">
                    <h6>📈 High Performance</h6>
                    <p className="small text-muted mb-0">
                      Premium T-Shirt is top seller with $12,400 revenue this month.
                    </p>
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-3">
                <p className="text-muted small">
                  <em>These insights demonstrate Business Intelligence capabilities - 
                  exactly what companies like Alpha Direct & Debswana need</em>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Helper function
const getStatusColor = (status) => {
  switch(status.toLowerCase()) {
    case 'delivered': return 'success';
    case 'shipped': return 'primary';
    case 'processing': return 'warning';
    case 'pending': return 'secondary';
    default: return 'light';
  }
};

export default Dashboard;
