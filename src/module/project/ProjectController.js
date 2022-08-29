let providerProject = require('./ProjectProvider');

/**
 * @controller
 */
class Project {

    /**
     * @public, @get
     * Récupère l'ensemble des projets
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    getAll(req, res) {
        const listSideProject = providerProject.getAll();
        return res.send(listSideProject);
    }

    /**
     * @public, @post
     * Ajoute un nouveau projet
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    post(req, res) {
        const sideProject = providerProject.create(1);
        return res.send(sideProject);
    }

    /**
     * @public, @update
     * Mets à jour un projet
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    update(req, res) {
        const sideProject = providerProject.update(1);
        return res.send(sideProject);
    }

    /**
     * @public, @delete
     * Supprime un projet
     *
     * @param {object} req 
     * @param {object} res 
     * @returns - response
     */
    delete(req, res) {
        const sideProject = providerProject.remove(1);
        return res.send(sideProject);
    }
};

module.exports = new Project();