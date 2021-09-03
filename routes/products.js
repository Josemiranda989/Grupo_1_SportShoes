var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

/* TODOS LOS PRODUCTOS */
router.get("/", productController.products); //..../products/products

/* PRODUCT CART */
router.get('/productCart', productController.productCart); //..../products/productCart

/* CREATE FORM */
router.get('/create', productController.create); //....Formulario de creación de productos

/* EDIT FORM */
router.get('/edit/:id', productController.edit);//Formulario de edición de productos

/* DETALLE DE UN PRODUCTO */
router.get("/:id", productController.productDetail); // ..../products/1

/* router.post('/products', productController)//) //completar//    //Acción de creación (a donde se envía el formulario)


router.put('/products/:id', productController)  // completar// // Acción de edición (a donde se envía el formulario):


router.delete('/:id')  // Acción de borrado// */



module.exports = router
