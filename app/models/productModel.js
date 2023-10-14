// Define dependencies
const mongoose = require('mongoose');

// Create schema
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    published: { type: Boolean, required: true, default: false },
    category: { type: String, required: true }
});

// Define model
const product = mongoose.model('Product', productSchema);

// Export model
module.exports = product;