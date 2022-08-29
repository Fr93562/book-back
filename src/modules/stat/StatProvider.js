const mock = require('../../mocks/stats');

/**
 * @provider
 */
class StatProvider {
    /**
     * @public
     * Récupère la liste des stats
     * @returns - array
     */
    getAll() {
        const listStats = mock;
    
        return listStats;
    }

    /**
     * @public
     * Mets à jour une stat
     * @returns -
     */
    update(stat) {
        const test = mock;
    
        return test;
    }
}

module.exports = new StatProvider();