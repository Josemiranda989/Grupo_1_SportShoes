const path = require('path');
const { body } = require('express-validator');


module.exports = [
  body('fullName')
    .notEmpty()
    .withMessage('Invalid Full name, please write again'),
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
    .withMessage('Invalid Password, please write again'),
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




