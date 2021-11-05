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
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', uploadImg.single("img1"), productController.update); 

/* SEARCH BAR */
router.get('/search',productController.search);

/* BORRAR UN PRODUCTO */ 
router.delete('/delete/:id', productController.delete);


module.exports = router
