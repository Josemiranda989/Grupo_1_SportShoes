var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/productCart', productController.productCart); //..../products/productCart
router.get("/allProducts", productController.allProducts); //..../products/allProducts
router.get("/:id", productController.productDetail); // ..../products/1

module.exports = router
