class Stat {

    /**
     * @public
     * Mets l'ensemble des stats
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    getAll(raq, res) {
        const stats = providerUser.getAll();
        return res.send(stats);
    }

    /**
     * @public
     * Mets à jour une stat
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

module.exports = new Stat();