//Si tengo un usuario logueado en session que lo redirija a la vista profile, sino que siga su camino.

function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/user/profile')
    }
    next();
}

module.exports = guestMiddleware