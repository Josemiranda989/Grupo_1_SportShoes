const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");

const userController = {
  register: (req, res) => {
    res.render("users/register");
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        //mapped convierte un array en objeto literal
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    db.User.findOne({ where: { email: req.body.email } }).then((userInDB) => {
      if (userInDB) {
        return res.render("users/register", {
          errors: {
            email: {
              msg: "This email is already registered",
            },
          },
          oldData: req.body,
        });
      } else {
        db.User.create({
          fullName: req.body.fullName,
          userName: req.body.userName,
          country: req.body.country,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
          address: req.body.address,
          avatar: req.file?.filename || "batman.png",
        })
          .then(() => {
            return res.redirect("/user/login");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  },

  login: (req, res) => {
    res.render("users/login");
  },

  loginProcess: async (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("users/login", {
        //mapped convierte un array en objeto literal
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    userToLogin = await db.User.findOne({ where: { email: req.body.email } });

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, {
            maxAge: 1000 * 60 * 60,
          }); //60 minutos
        }

        return res.redirect("/user/profile");
      }

      return res.render("users/login", {
        errors: {
          email: {
            msg: "The provided credentials being incorrect",
          },
        },
      });
    }

    return res
      .render("users/login", {
        errors: {
          email: {
            msg: "The provided credentials being incorrect",
          },
        },
      })
      .catch((err) => {
        res.send(err);
      });
  },

  profile: async (req, res) => {
    try {
      let orders = await db.Order.findAll({
        where: { id: req.session.userLogged.id },
      });
      res.render("users/profile", { orders });
    } catch (error) {
      res.send(error);
    }
  },

  edit: (req, res) => {
    db.User.findByPk(parseInt(req.params.id, 10))
      .then(function (profileToEdit) {
        res.render("users/edit", { profileToEdit: profileToEdit });
      })
      .catch((err) => {
        res.send(err);
      });
  },

  update: (req, res) => {
    let id = req.params.id;
    db.User.findByPk(id).then((oneUser) => {
      db.User.update(
        {
          fullName: req.body.fullName || oneUser.fullName,
          userName: req.body.userName || oneUser.userName,
          country: req.body.country || oneUser.country,
          email: req.body.email || oneUser.email,
          password:
            req.body.password == ""
              ? oneUser.password
              : bcryptjs.hashSync(req.body.password, 10),
          address: req.body.address || oneUser.address,
          avatar: req.file == undefined ? oneUser.avatar : req.file.filename,
        },
        {
          where: {
            id: id,
          },
        }
      )
        .then(() => {
          return res.redirect("/user/profile/");
        })
        .catch((error) => res.send(error));
    });
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },

  delete: function (req, res) {
    db.User.destroy({
      where: { id: parseInt(req.params.id, 10) },
    }) // force: true es para asegurar que se ejecute la acción
      .then(() => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
      })
      .catch((error) => res.send(error));
  },
};

module.exports = userController;
