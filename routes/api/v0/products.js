// Express Router
const express = require('express');
const router = express.Router();

// Get Product API Controller
const productApi = require('../../../controller/api/v0/product_api');

// Set Router for Get All Products
router.get('/', productApi.getProducts);

// Set Router for Create Product
router.post('/create', productApi.createProduct);

// Set Router for Delete Product - Takes Product ID as Param
router.delete('/:id', productApi.deleteProduct);

// Set Router for Update Product - Takes Product ID as Param and Update Quantity as Query Value 
router.post('/:id/update_quantity', productApi.updateQuantity);

module.exports = router;