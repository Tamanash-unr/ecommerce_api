const express = require('express');

const router = express.Router();
const productApi = require('../../../controller/api/v0/product_api');

router.get('/', productApi.getProducts);
router.post('/create', productApi.createProduct);
router.delete('/:id', productApi.deleteProduct);
router.post('/:id/update_quantity', productApi.updateQuantity);

module.exports = router;