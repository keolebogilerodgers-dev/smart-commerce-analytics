const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/smartcommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.log('❌ MongoDB Error:', err));

// Test Route
app.get('/', (req, res) => {
  res.json({ 
    message: 'SmartCommerce API is running',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      analytics: '/api/analytics',
      orders: '/api/orders'
    }
  });
});

// Mock Data Route (for initial testing)
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Premium T-Shirt', price: 29.99, category: 'Clothing', stock: 45 },
    { id: 2, name: 'Wireless Headphones', price: 89.99, category: 'Electronics', stock: 32 },
    { id: 3, name: 'Coffee Mug', price: 14.99, category: 'Home', stock: 67 },
    { id: 4, name: 'Fitness Tracker', price: 49.99, category: 'Fitness', stock: 28 },
    { id: 5, name: 'Backpack', price: 39.99, category: 'Accessories', stock: 54 }
  ];
  res.json(products);
});

// Analytics Endpoint (shows your BI skills)
app.get('/api/analytics/overview', (req, res) => {
  const analytics = {
    summary: {
      totalRevenue: 45280,
      totalOrders: 324,
      avgOrderValue: 139.75,
      conversionRate: 3.2
    },
    trends: {
      revenueGrowth: 12.5,
      orderGrowth: 8.3,
      customerGrowth: 15.2
    },
    topProducts: [
      { name: 'Premium T-Shirt', revenue: 12400, units: 413 },
      { name: 'Wireless Headphones', revenue: 9850, units: 110 },
      { name: 'Fitness Tracker', revenue: 7450, units: 149 }
    ]
  };
  res.json(analytics);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
