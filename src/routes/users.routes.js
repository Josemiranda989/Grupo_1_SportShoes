const express = require("express");
const router = express.Router();

// Controller
const userController = require("../controllers/userController");

// Middlewares
const uploadAvatar = require("../middlewares/multer/multerAvatar");
const validations = require("../middlewares/validations/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/auth/guestMiddleware");
const authMiddleware = require("../middlewares/auth/authMiddleware");
const validatedLog = require("../middlewares/validations/validatedLogingMiddleware");

//FORMULARIO DE REGISTRO
router.get("/register", guestMiddleware, userController.register);

//PROCESAMIENTO DEL REGISTRO
router.post(
  "/register",
  uploadAvatar.single("avatar"),
  validations,
  userController.processRegister
);

//FORMULARIO DE LOGIN
router.get("/login", guestMiddleware, userController.login);

//PROCESAMIENTO DEL LOGIN
router.post("/login", validatedLog, userController.loginProcess);

//PERFIL DE USUARIO
router.get("/profile/", authMiddleware, userController.profile);

//EDITAR DE USUARIO
router.get("/edit/:id", authMiddleware, userController.edit);
router.put("/edit/:id", uploadAvatar.single("avatar"), userController.update);

//LOGOUT
router.get("/logout/", userController.logout);

/* BORRAR UN USUARIO */
router.delete("/delete/:id", userController.delete);

module.exports = router;
