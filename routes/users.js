var express = require('express')
var router = express.Router()

// Controller
const userController = require('../controllers/userController')

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//FORMULARIO DE REGISTRO
router.get('/register', guestMiddleware, userController.register)

//PROCESAMIENTO DEL REGISTRO
router.post('/register', uploadFile.single('avatar'), validations, userController.processRegister)

//FORMULARIO DE LOGIN
router.get('/login', guestMiddleware, userController.login)

//PROCESAMIENTO DEL LOGIN
router.post('/login', userController.loginProcess)

//PERFIL DE USUARIO
router.get('/profile/', authMiddleware, userController.profile)

//LOGOUT
router.get('/logout/', userController.logout);

module.exports = router
