let providerSideProject = require('./SideProvider');

/**
 * @controller
 */
class SideController {

    /**
     * @public, @get
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
     * @public, @get
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
     * @public, @post
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
     * @public, @update
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
     * @public, @delete
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

module.exports = new SideController();