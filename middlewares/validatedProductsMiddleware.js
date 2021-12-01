const path = require('path')
const { body } = require('express-validator')

module.exports = [
  body('productName')
    .notEmpty()
    .withMessage('You must complete your product')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Your product must have min 2 character '),
  body('price').notEmpty().withMessage('please write a number'),
  body('description')
    .notEmpty()
    .withMessage('please write a description')
    .isLength({ min: 20 })
    .withMessage('Your description must have min 20 character '),
  body('color')
    .notEmpty()
    .withMessage('please write a color'),
  body('brand')
    .notEmpty()
    .withMessage('please write a brand'),
  body('size')
  .notEmpty()
  .withMessage('please write a size'),
  body('img1').custom((value, { req }) => {
    let file = req.file
    let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg']

    if (!file) {
      throw new Error('Upload an image')
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
