const path = require('path');
const { body } = require('express-validator');


module.exports = [
  body('fullName')
    .notEmpty()
     .withMessage('You must complete your Fullname').bail()
    .isLength({ min: 2 })
    .withMessage('Your fullname must have min 2 character '),
  body('userName')
    .notEmpty()
    .withMessage('Invalid Username, please write again'),
  body('address')
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
    .withMessage('You must to complete your Password').bail()
    .isLength({ min: 8  })
    .withMessage("Must contain at least one number,uppercase andlowercase letter, min 8 or more characters" )
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,)
    .withMessage("Must contain at least one number,uppercase andlowercase letter, min 8 or more characters" ),
  body('country').notEmpty().withMessage('Not selected, please choose again'),
  body('avatar').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

    if (!file) {
      throw new Error("Upload an image")
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




