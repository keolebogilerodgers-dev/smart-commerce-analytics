import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Products from './pages/Products/Products';
import Analytics from './pages/Analytics/Analytics';
import Customers from './pages/Customers/Customers';

// Import Components
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true); // For demo

  if (!isAuthenticated) {
    return <Login setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <Router>
      <div className="d-flex" style={{ minHeight: '100vh' }}>
        <Sidebar />
        <div className="flex-grow-1">
          <Topbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
