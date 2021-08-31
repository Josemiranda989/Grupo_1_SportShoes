var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/productCart', productController.productCart);
router.get("/:shoes", productController.productDetail);
/* router.get("/allProducts", productController.allProducts); PREGUNTA */

module.exports = router


/* RUTA INGRESO PRODUCTOS
  "http://localhost:3003/products/...." */