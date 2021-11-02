// Require's
const express = require('express');
const router = express.Router();
const uploadImg = require('../middlewares/multerMiddlewareImg');

// Controller require
const productController = require('../controllers/productController')



/* TODOS LOS PRODUCTOS */
router.get("/", productController.products);

/* DETALLE DE UN PRODUCTO */
router.get("/detail/:id", productController.productDetail); 

/* PRODUCT CART */
router.get('/productCart', productController.productCart); 

/* CREATE PRODUCTS */
router.get('/create', productController.create); 
router.post('/', uploadImg.single("img1"), productController.store); 

/* EDIT PRODUCT */
router.get('/:id/edit', productController.edit);
router.put('/:id/edit', uploadImg.single("img1"), productController.update); 

/* BORRAR UN PRODUCTO */ 
router.delete('/:id', productController.delete);

/* SEARCH BAR */
router.get('/search',productController.search);

module.exports = router
