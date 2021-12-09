var express = require('express');
<<<<<<< HEAD

=======
>>>>>>> c3976c5b008303c19b0630c06ad8c67d98582a0f
var router = express.Router();
const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.index);
router.get('/error', mainController.error);
router.get('/terms', mainController.terms);
router.get('/privacy',mainController.privacy);
router.get('/shippinginfo',mainController.shippinginfo);
router.get('/covidinfo',mainController.covidinfo);
router.get('/contactus',mainController.contactus);
router.get('/map',mainController.map);
router.get('/aboutus',mainController.aboutus);
router.get('/help',mainController.help);
module.exports = router;
