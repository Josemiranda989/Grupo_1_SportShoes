const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const db = require('../database/models')


/* Lista de Productos .JSON */
const allUsersFilePath = path.join(__dirname, '../data/users.json')
const allUsers = JSON.parse(fs.readFileSync(allUsersFilePath, 'utf-8'))

const userController = {
  register: (req, res) => {
    res.render('users/register')
  },

  processRegister: (req, res) => {
    //terminado
    const resultValidation = validationResult(req)
    if (resultValidation.errors.length > 0) {
      return res.render('users/register', {
        //mapped convierte un array en objeto literal
        errors: resultValidation.mapped(),
        oldData: req.body,
      })
    }

    db.User.findAll().then((users) => {
      let userInDB = users.find((i) => i.email == req.body.email)
      if (userInDB) {
        return res.render('users/register', {
          errors: {
            email: {
              msg: 'This email is already registered',
            },
          },
          oldData: req.body,
        })
      } else {
        db.User.create({
          fullName: req.body.fullName,
          userName: req.body.userName,
          country: req.body.country,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
          address: req.body.address,
          avatar: req.file.filename,
        })
          .then(() => {
            return res.redirect('/user/login')
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  },

  login: (req, res) => {
    res.render('users/login')
  },

  loginProcess: (req, res) => {
    const resultValidation = validationResult(req)
    if (resultValidation.errors.length > 0) {
      return res.render('users/login', {
        //mapped convierte un array en objeto literal
        errors: resultValidation.mapped(),
        oldData: req.body,
      })
    }

    db.User.findAll().then((users) => {
      let userToLogin = users.find((i) => i.email == req.body.email)

      if (userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(
          req.body.password,
          userToLogin.password,
        )
        if (isOkThePassword) {
          delete userToLogin.password
          req.session.userLogged = userToLogin

          if (req.body.remember_user) {
            res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 * 60 }) //60 minutos
          }

          return res.redirect('/user/profile')
        }

        return res.render('users/login', {
          errors: {
            email: {
              msg: 'The provided credentials being incorrect',
            },
          },
        })
      }

      return res.render('users/login', {
        errors: {
          email: {
            msg: 'The provided credentials being incorrect',
          },
        },
      })
    })
  },

  profile: (req, res) => {
    db.User.findByPk(parseInt(req.session.userLogged.user_id)).then((user) => {
      res.render('users/profile', {
        user: user,
      })
    })
  },

  edit: (req, res) => {
    db.User.findByPk(parseInt(req.params.id, 10)).then(function (
      profileToEdit,
    ) {
      res.render('users/edit', { profileToEdit: profileToEdit })
    })
  },

  update: (req, res) => {
    let id = req.params.id
    db.User.findByPk(id).then((oneUser) => {
      db.User.update(
        {
          fullName: req.body.fullName || oneUser.fullName,
          userName: req.body.userName || oneUser.userName,
          country: req.body.country || oneUser.country,
          email: req.body.email || oneUser.email,
          password:
            req.body.password == ''
              ? oneUser.password
              : bcryptjs.hashSync(req.body.password, 10),
          address: req.body.address || oneUser.address,
          avatar: req.file == undefined ? oneUser.avatar : req.file.filename,
        },
        {
          where: {
            user_id: id,
          },
        },
      )
        .then(() => {
          return res.redirect('/user/profile/')
        })
        .catch((error) => res.send(error))
    })
  },

  logout: (req, res) => {
    res.clearCookie('userEmail')
    req.session.destroy()
    return res.redirect('/')
  },

  delete: function (req, res) {
    db.User.destroy({
      where: { user_id: parseInt(req.params.id, 10) },
      force: true,
    }) // force: true es para asegurar que se ejecute la acción
      .then(() => {
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
      })
      .catch((error) => res.send(error))
  },
}

module.exports = userController
