//Si no tengo un usuario logueado en session que lo redirija a la vista login, sino que siga su camino.

function authMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/user/login');
    }
    next();
}

module.exports = authMiddleware;