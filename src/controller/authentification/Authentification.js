let providerAuthentification = require('../../provider/authentification');
let providerUser = require('../../provider/user');

/**
 * @controller
 */
class Authentification {
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

module.exports = new Authentification();