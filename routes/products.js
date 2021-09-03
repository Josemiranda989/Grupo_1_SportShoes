var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/productCart', productController.productCart); //..../products/productCart
router.get("/products", productController.products); //..../products/products
router.get('/products/create',productController.create); //....Formulario de creación de productos
router.get('/products/:id/edit',productController.edit);//Formulario de edición de productos
router.post('/products',productController)//) //completar//    //Acción de creación (a donde se envía el formulario)
router.put('/products/:id',productController)  // completar// // Acción de edición (a donde se envía el formulario):
router.delete('/products/:id')  // Acción de borrado// 


router.get("/:id", productController.productDetail); // ..../products/1

module.exports = router
