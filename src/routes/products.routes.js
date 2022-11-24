// Require's
const express = require("express");
const router = express.Router();
const uploadImg = require("../middlewares/multer/multerImg");

// Controller require
const productController = require("../controllers/productController");
const validatedProduct = require("../middlewares/validations/validatedProductsMiddleware");
const validatedEditProduct = require("../middlewares/validations/validatedEditProdMiddleware");
const authMiddleware = require("../middlewares/auth/authMiddleware");

/* TODOS LOS PRODUCTOS */
router.get("/", productController.products);

/* DETALLE DE UN PRODUCTO */
router.get("/detail/:id", productController.productDetail);

/* Productos en descuento */
router.get("/sale", productController.sale);

/* CREATE PRODUCTS */
router.get("/create", authMiddleware, productController.create);
router.post(
  "/",
  uploadImg.single("img"),
  validatedProduct,
  productController.store
);

/* EDIT PRODUCT */
router.get("/edit/:id", authMiddleware, productController.edit);
router.put(
  "/edit/:id",
  uploadImg.single("img"),
  validatedEditProduct,
  productController.update
);

/* SEARCH BAR */
router.get("/search", productController.search);

/* BORRAR UN PRODUCTO */
router.delete("/delete/:id", productController.delete);

/* ORDENAR */
router.get("/asc", productController.asc);
router.get("/desc", productController.desc);

module.exports = router;
