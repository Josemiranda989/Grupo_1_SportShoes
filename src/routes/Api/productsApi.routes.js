// Require's
const express = require('express');
const router = express.Router();
const uploadImg = require('../../middlewares/multerMiddlewareImg');

// Controller require
const productApi = require('../../controllers/Api/productApi')

/* Todos los productos http://localhost:3020/api/products */
router.get('/', productApi.products);

/* Buscar producto http://localhost:3020/api/products/search?keyword=nike */
router.get('/search', productApi.search);

/* Crear producto http://localhost:3020/api/products */
router.post('/', productApi.store)

/* Detalle Producto http://localhost:3020/api/products/:id */
router.get('/:id', productApi.productDetail);

/* Borrar producto http://localhost:3020/api/products/:id */
router.delete('/:id', productApi.delete)



module.exports = router
