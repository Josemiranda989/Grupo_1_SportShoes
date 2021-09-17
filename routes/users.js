
var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

//FORMULARIO DE LOGIN
router.get('/login', userController.login);
//FORMULARIO DE REGISTRO
router.get('/register', userController.register);

//PERFIL DE USUARIO 
router.get('/profile/:userId',userController.profile);

module.exports = router;
