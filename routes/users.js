
var express = require('express');
var router = express.Router();
const multer = require('multer')
const path = require('path')
const userController = require('../controllers/userController')

// Configurar Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, `../public/images/avatars/`)) 
    },
    filename: function (req, file, cb) {
        let FileName = Date.now()+ '-img' + path.extname(file.originalname)
        cb(null, FileName)
    }
})

const uploadFile = multer({ storage })

//FORMULARIO DE LOGIN
router.get('/login', userController.login);
//PROCESAMIENTO DEL LOGIN

//FORMULARIO DE REGISTRO
router.get('/register', userController.register);
//PROCESAMIENTO DEL REGISTRO
router.post('/register', uploadFile.single('avatar'), userController.processRegister);

//PERFIL DE USUARIO 
router.get('/profile/:userId',userController.profile);

module.exports = router;
