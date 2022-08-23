let login = require('../../security/login');

function logged(req, res, next) {
    let accepted = login();

    if (accepted) {
        next();
    } else {
        res.status(401).render('special');
    }
}

function unlogged(req, res, next) {
    let logged = !login();

    if (!logged) {
        next();
    } else {
        res.status(401).render('special');
    }
}

module.exports = {
    logged,
    unlogged,
};