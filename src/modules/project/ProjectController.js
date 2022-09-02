let providerProject = require('./ProjectProvider');
let securityHash = require('../../security/Hash');
/**
 * @controller
 */
class ProjectController {

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
        console.log('my hash', securityHash.create('test'));
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
        const sideProject = providerProject.delete(1);
        return res.send(sideProject);
    }
};

module.exports = new ProjectController();