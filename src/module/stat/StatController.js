let providerStat = require('./StatProvider');

/**
 * @controller
 */
class Stat {

    /**
     * @public, @get
     * Mets l'ensemble des stats
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    getAll(raq, res) {
        const stats = providerStat.getAll();
        return res.send(stats);
    }

    /**
     * @public, @update
     * Mets à jour une stat
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    update(raq, res) {
        const user = providerStat.update();
        return res.send(user);
    }
}

module.exports = new Stat();