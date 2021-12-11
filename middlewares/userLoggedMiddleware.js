const User = require('../models/User')
const db = require('../database/models')

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false

  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true
    res.locals.userLogged = req.session.userLogged
  }

  let emailInCookie = req.cookies.userEmail
  /* DataBase */
  db.User.findAll().then((users) => {
    let userFromCookie = users.find((i) => i.email == emailInCookie)
    if (userFromCookie) {
      req.session.userLogged = userFromCookie
    }

    if (req.session.userLogged) {
      res.locals.isLogged = true
      res.locals.userLogged = req.session.userLogged
    }
    next()
  })
}

module.exports = userLoggedMiddleware
