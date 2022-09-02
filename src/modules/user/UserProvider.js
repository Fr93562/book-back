const UserEntity = require('./UserEntity');
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
        const userDatabase = mock;
        const user = new UserEntity(userDatabase);

        return user.toJson();
    }

    getComplete() {
        const userDatabase = mock;
        const user = new UserEntity(userDatabase);

        return user.toCompleteJson();
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