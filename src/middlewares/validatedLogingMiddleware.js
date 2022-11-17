
const { check } = require("express-validator");

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("Please, write an email ")
    .bail()
    .isEmail()
    .withMessage("write a correct email format please"),
  check("password")
  .notEmpty()
  .withMessage("You must to complete your Password")
];
