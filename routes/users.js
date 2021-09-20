var express = require('express')
var router = express.Router()
const multer = require('multer')
const path = require('path')
const { body } = require('express-validator') //extrae datos del formulario
const userController = require('../controllers/userController')

const validations = [
  body('nombreApellido')
    .notEmpty()
    .withMessage('Invalid Full name, please write again'),
  body('usuario')
    .notEmpty()
    .withMessage('Invalid User name, please write again'),
  body('domicilio')
    .notEmpty()
    .withMessage('Invalid Adress, please write again'),
  body('email')
    .notEmpty()
    .withMessage('Invalid Email, please write again')
    .bail()
    .isEmail()
    .withMessage('write a correct email format please'),
  body('password')
    .notEmpty()
    .withMessage('Invalid Password, please write again'),
  body('country').notEmpty().withMessage('Not selected, please choose again'),
  body('avatar').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

    if (!file) {
      throw new Error('Choose a image')
    } else {
      let fileExtension = path.extname(file.originalname)
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `The allowed extensions are ${acceptedExtensions.join(',')}`,
        )
      }
    }
    return true
  }),
]

// Configurar Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, `../public/images/avatars/`))
  },
  filename: function (req, file, cb) {
    let FileName = Date.now() + '-img' + path.extname(file.originalname)
    cb(null, FileName)
  },
})

const uploadFile = multer({ storage })

//FORMULARIO DE LOGIN
router.get('/login', userController.login)
//PROCESAMIENTO DEL LOGIN

//FORMULARIO DE REGISTRO
router.get('/register', userController.register)
//PROCESAMIENTO DEL REGISTRO
router.post(
  '/register',
  uploadFile.single('avatar'),
  validations,
  userController.processRegister,
)

//PERFIL DE USUARIO
router.get('/profile/:userId', userController.profile)

module.exports = router
