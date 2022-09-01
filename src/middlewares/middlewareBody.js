let errorController = require('../modules/error/ErrorController');

/**
 * Indique si le body est vide
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
function isNotEmpty(req, res, next) {
    let body = req.body;

    if (body) {
        next();
    } else {
        errorController.empty(req, res);
    }
}

module.exports = isNotEmpty;