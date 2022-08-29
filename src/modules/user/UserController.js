let providerUser = require('./UserProvider');

/**
 * @controller
 */
class User {

    /**
     * @public, @get
     * Récupère le user
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    get(raq, res) {
        const user = providerUser.get();
        return res.send(user);
    }

    /**
     * @public, @update
     * Mets à jour le user
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    update(raq, res) {
        const user = providerUser.update();
        return res.send(user);
    }
}

module.exports = new User();