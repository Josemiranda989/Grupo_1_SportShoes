
const { check } = require("express-validator");

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("Invalid Email, please write again")
    .bail()
    .isEmail()
    .withMessage("write a correct email format please"),
  check("password")
  .notEmpty()
  .withMessage("You must to complete your Password")
];
