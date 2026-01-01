const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // Basic Information
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  description: String,
  price: { type: Number, required: true },
  comparePrice: Number,
  cost: Number, // For profit calculation
  
  // Inventory
  stock: { type: Number, default: 0 },
  lowStockThreshold: { type: Number, default: 10 },
  
  // Categorization
  category: String,
  tags: [String],
  
  // Images
  images: [String],
  
  // Business Intelligence Fields
  analytics: {
    views: { type: Number, default: 0 },
    purchases: { type: Number, default: 0 },
    addToCarts: { type: Number, default: 0 },
    conversionRate: { type: Number, default: 0 }
  },
  
  // Performance Metrics
  performance: {
    revenue: { type: Number, default: 0 },
    profitMargin: Number,
    stockTurnover: Number
  },
  
  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update conversion rate before save
productSchema.pre('save', function(next) {
  if (this.analytics.views > 0) {
    this.analytics.conversionRate = 
      (this.analytics.purchases / this.analytics.views) * 100;
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
