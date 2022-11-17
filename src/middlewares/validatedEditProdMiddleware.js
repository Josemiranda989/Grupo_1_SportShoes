const path = require('path')
const { body } = require('express-validator')

module.exports = [
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
]
