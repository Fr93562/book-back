let configSecurity = require('../configs/security');
let token = require('../security/Token');
let errorController = require('../modules/error/ErrorController');

/**
 * Indique si l'utilisateur est connecté
 * @param {object} req 
 * @returns - string
 */
function getLogged (req) {
    let jwt =  req.header(configSecurity.header);
    let logged = false;

    if (jwt) {
        logged = token.verify(jwt);
    }
    return logged;
}

/**
 * Indique si l'utilisateur est connecté
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
function isLogged(req, res, next) {
    let logged = getLogged(req);

    if (logged) {
        next();
    } else {
        errorController.unauthorized(req, res);
    }
}

/**
 * Indique si l'utilisateur est n'est pas connecté
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
function isNotLogged(req, res, next) {
    let notLogged = !getLogged(req);

    if (notLogged) {
        next();
    } else {
        errorController.alreadyAuthorized(req, res);
    }
}

module.exports = {
    isLogged,
    isNotLogged,
};