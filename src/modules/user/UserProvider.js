const mock = require('../../mocks/user');

/**
 * @provider
 */
class UserProvider{
    /**
     * @public
     * Récupère un user
     * @returns - object
     */
    get() {
        const user = mock;
    
        return user;
    }

    /**
     * @public
     * Mets à jour un user
     * @returns - user
     */
    update() {
        const user = mock;
    
        return user;
    }
}

module.exports = new UserProvider();