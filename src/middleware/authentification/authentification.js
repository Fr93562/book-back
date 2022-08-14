let login = require('../../security/login');

function authentification(req, res, next) {
    let logged = login();
    console.log('heuu t la?');

    if (logged) {
        console.log('next');
        next();
    } else {
        res.satus(401).render('special');
    }
}

module.exports = authentification;