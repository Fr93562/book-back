let providerSideProject = require('../../provider/side');

class Side {

    /**
     * @public
     * Récupère un side project
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    get(req, res) {
        const sideProject = providerSideProject.get(1);
        return res.send(sideProject);
    }

    /**
     * @public
     * Récupère l'ensemble des sides projects
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    getAll(req, res) {
        const listSideProject = providerSideProject.getAll();
        return res.send(listSideProject);
    }

    /**
     * @public
     * Ajoute un side project
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    post(req, res) {
        const sideProject = providerSideProject.create(1);
        return res.send(sideProject);
    }

    /**
     * @public
     * Mets à jour un side project
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    update(req, res) {
        const sideProject = providerSideProject.update(1);
        return res.send(sideProject);
    }

    /**
     * @public
     * Supprime un side project
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    delete(req, res) {
        const sideProject = providerSideProject.remove(1);
        return res.send(sideProject);
    }
}

module.exports = new Side();