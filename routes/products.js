var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/productCart', productController.productCart); //..../products/productCart
router.get("/:id", productController.productDetail); // ..../products/1
/* router.get("/allProducts", productController.allProducts); PREGUNTA */

module.exports = router
