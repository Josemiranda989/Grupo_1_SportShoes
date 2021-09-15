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
router.get("/", productController.products);

/* DETALLE DE UN PRODUCTO */
router.get("/detail/:id", productController.productDetail); 

/* PRODUCT CART */
router.get('/productCart', productController.productCart); 

/* CREATE PRODUCTS */
router.get('/create', productController.create); 
router.post('/', upload.single("img1"), productController.store); 

/* EDIT PRODUCT */
router.get('/:id/edit', productController.edit);
router.put('/:id/edit', upload.single("img1"), productController.update); 

/* BORRAR UN PRODUCTO */ 
router.delete('/:id', productController.delete);

/* SEARCH BAR */
router.get('/search',productController.search);

module.exports = router
