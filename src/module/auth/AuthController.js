let providerAuthentification = require('./AuthProvider');
let providerUser = require('../user/UserProvider');

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
        let authentified = providerAuthentification.compare();
        let token = 'nop';

        if (authentified) {
            token = 'token'
        }

        const response = {
            user: providerUser.get(),
            token: 'kikou',
        }

        return res.send(response);
    }
}

module.exports = new AuthController();