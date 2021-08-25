var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.index);

router.get('/error', mainController.error);
router.get('/login', mainController.login);
router.get('/productCart', mainController.productCart);
router.get('/register', mainController.register);
router.get('/terms', mainController.terms);
router.get("/:shoes", mainController.productDetail);



module.exports = router;
