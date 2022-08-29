const bcrypt = require('bcrypt');
let configSecurity = require('../configs/security');

/**
 * @security
 */
class Hash {
    /**
     * @public
     * Génère un hash
     * @param {string} data 
     * @returns 
     */
    create(data) {
        let salt = bcrypt.genSaltSync(configSecurity.salt);
        let hash = bcrypt.hashSync(data, salt);

        return hash;
    }

    /**
     * @public
     * Compare un hash à un string
     * @param {string} hash 
     * @param {string} data 
     * @returns 
     */
    compare(hash, data) {
        return bcrypt.compareSync(data, hash);
    }
}

module.exports = new Hash();