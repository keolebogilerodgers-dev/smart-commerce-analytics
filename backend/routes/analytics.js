const express = require('express');
const router = express.Router();

// Business Intelligence Endpoints
router.get('/overview', (req, res) => {
  // Mock data showing complex analytics
  const overview = {
    summary: {
      totalRevenue: 45280,
      totalOrders: 324,
      totalCustomers: 1248,
      avgOrderValue: 139.75,
      conversionRate: 3.2
    },
    trends: {
      revenue: { current: 45280, previous: 40240, change: 12.5 },
      orders: { current: 324, previous: 299, change: 8.3 },
      customers: { current: 1248, previous: 1083, change: 15.2 }
    },
    topProducts: [
      { name: 'Premium T-Shirt', revenue: 12400, units: 413, margin: 45 },
      { name: 'Wireless Headphones', revenue: 9850, units: 110, margin: 32 },
      { name: 'Fitness Tracker', revenue: 7450, units: 149, margin: 28 }
    ],
    insights: [
      {
        type: 'growth',
        title: 'Fitness Category Growing',
        description: 'Fitness products show 15.2% growth vs last month',
        recommendation: 'Increase inventory by 20%'
      },
      {
        type: 'attention',
        title: 'Average Order Value Declining',
        description: 'AOV decreased by 2.1% - review pricing strategy',
        recommendation: 'Implement bundled offers'
      }
    ]
  };
  res.json(overview);
});

// Sales prediction endpoint
router.get('/predictions/sales', (req, res) => {
  // Mock ML predictions
  const predictions = {
    next30Days: {
      predictedRevenue: 51200,
      predictedOrders: 365,
      confidence: 85
    },
    byCategory: [
      { category: 'Clothing', growth: 12.5 },
      { category: 'Electronics', growth: 8.3 },
      { category: 'Fitness', growth: 15.2 }
    ],
    recommendations: [
      'Stock more Fitness products (high growth)',
      'Run promotion on Electronics (slower growth)',
      'Optimize Clothing pricing (steady demand)'
    ]
  };
  res.json(predictions);
});

// Inventory optimization
router.get('/inventory/optimization', (req, res) => {
  const optimization = {
    lowStock: [
      { product: 'Wireless Headphones', current: 15, recommended: 45 },
      { product: 'Coffee Mug', current: 22, recommended: 80 }
    ],
    overstock: [
      { product: 'Basic T-Shirt', current: 120, recommended: 60 }
    ],
    reorderSuggestions: [
      { product: 'Wireless Headphones', quantity: 30, urgency: 'high' },
      { product: 'Fitness Tracker', quantity: 25, urgency: 'medium' }
    ]
  };
  res.json(optimization);
});

module.exports = router;
