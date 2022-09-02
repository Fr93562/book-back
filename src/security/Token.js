let jwt = require('jsonwebtoken');
let configSecurity = require('../configs/security');

/**
 * @security
 */
class Token {
  /**
   * @public
   * Génère le token jwt
   * @param {object} data 
   * @returns 
   */
  create(data) {
    let token = jwt.sign(data, configSecurity.secret);
    return token;
  }

  /**
   * @public
   * Vérifie la validité du token jwt
   * @param {string} token 
   * @returns 
   */
  verify(token) {
    let decoded = '';

    try {
      decoded = jwt.verify(token, configSecurity.secret);
    } catch (err) {
      return decoded;
    }
    return decoded;
  }
};

module.exports = new Token();