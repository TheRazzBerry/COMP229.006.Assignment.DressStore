// Define Module Dependencies
const express = require('express');

// Define Router
const router = express.Router();

// Define Model Dependencies
const Product = require('../models/productModel');

// Define Controllers
let productController = require('../controllers/productsController.js');

// Define Method Routes
router.get('/', productController.getAll);
router.get('/:id', productController.getOne, productController.read);
router.post('/', productController.add);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

// Export Module
module.exports = router;