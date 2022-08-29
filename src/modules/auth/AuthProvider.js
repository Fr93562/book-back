let providerUser = require('../user/UserProvider');
let securityToken = require('../../security/Token');

/**
 * @provider
 */
class AuthProvider {
    /**
     * @public
     * Gère le login de l'utilisateur
     * @param {object} entryUser
     * @returns - string
     */
    login(entryUser) {
        let databaseUser = providerUser.get('futur user');
        let check = { mail: false, password: false };
        let response = '';

        if (databaseUser && entryUser) {
            check.mail = databaseUser.mail === entryUser.mail;
            check.password = databaseUser.password === entryUser.password;
        }

        if (check.mail && check.password) {
            response = securityToken.create(entryUser);
        }
        return response;
    }

    /**
     * @public
     * Vérifie la validité du token
     * @returns - string
     */
    verify() {
        return securityToken.verify(token);
    }
}

module.exports = new AuthProvider();