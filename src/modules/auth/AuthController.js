let configSecurity = require('../../configs/security');
let providerAuth = require('./AuthProvider');
let providerUser = require('../user/UserProvider');
let errorController = require('../error/ErrorController');

/**
 * @controller
 */
class AuthController {
    /**
     * @public, @post , @security
     * Récupère l'ensemble des projets
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    login(req, res) {
        let body = req.body;
        let isBody = body && body.mail && body.password;
        let authentified = '';

        if (isBody) {
            authentified = providerAuth.login(body);
        }

        if(!authentified) {
            return errorController.forbidden(req, res);
        }

        const response = {
            header: configSecurity.header,
            token: authentified,
        };

        return res.send(response);
    }
}

module.exports = new AuthController();