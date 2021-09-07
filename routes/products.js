// Require's
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
// Controller require
const productController = require('../controllers/productController')

// Config Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/shoes-img'))
    },
    filename: function (req, file, cb) {
        const newFileName = 'product-' + Date.now() + path.extname(file.originalname)
        cb(null, newFileName)
    }
})

const upload = multer({ storage })

/* TODOS LOS PRODUCTOS */
router.get("/", productController.products); //..../products/products

/* PRODUCT CART */
router.get('/productCart', productController.productCart); //..../products/productCart

/* CREATE PRODUCTS */
router.get('/create', productController.create); 
router.post('/', upload.single('product-image'), productController.store); 

/* EDIT FORM */
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', upload.single('product-image'), productController.update); 


// * SEARCH BAR*//
router.get('/search',productController.search);

/* DETALLE DE UN PRODUCTO */
router.get("/:id", productController.productDetail); // ..../products/1

/* BORRAR UN PRODUCTO */ 
router.delete('/:id', productController.delete); 

module.exports = router
