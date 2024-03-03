const express = require('express');
const productController = require('./../controllers/productController');
const router = express.Router();
router.route('/').get(productController.sayHi)
router.route('/getallproducts').get(productController.getAllProducts);
router.route('/search').get(productController.searchProducts);
module.exports = router;

