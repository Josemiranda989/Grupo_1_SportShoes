// Require's
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require ('fs')
// Controller require
const productController = require('../controllers/productController')

// Configurar Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var newFolderName = req.body.productName
        fs.mkdirSync(path.join(__dirname,`../public/images/shoes-img/${newFolderName}/`),{recursive:true});
        cb(null, path.join(__dirname, `../public/images/shoes-img/${newFolderName}/`)) 
    },
    filename: function (req, file, cb) {
        const newFileName = '1' + path.extname(file.originalname)
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
router.post('/', upload.single("img1"), productController.store); 

/* EDIT FORM */
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', upload.single("img1"), productController.update); 


// * SEARCH BAR*//
router.get('/search',productController.search);

/* DETALLE DE UN PRODUCTO */
router.get("/:id", productController.productDetail); // ..../products/1

/* BORRAR UN PRODUCTO */ 
router.delete('/:id', productController.delete); 

module.exports = router
