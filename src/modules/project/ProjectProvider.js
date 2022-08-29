const mock = require('../../mocks/projects');

/**
 * @provider
 */
class ProjectProvider {
    /**
     * @public
     * Récupère la liste des projets
     * @returns - array
     */
    getAll() {
        const listSideProject = mock;
    
        return listSideProject;
    }

    /**
     * @public
     * Ajoute un projet
     * @param {object} project 
     * @returns 
     */
    create(project) {
        const result = 'done';
        return result;
    }

    /**
     * @public
     * Mets à jour un projet
     * @param {object} id 
     * @returns 
     */
    update(project) {
        const sideProject = mock[0];
    
        return sideProject;
    }

    /**
     * @public
     * Supprime un projet
     * @param {object} id 
     * @returns 
     */
    delete(project) {
        const result = 'done';
        return result;
    }
}

module.exports = new ProjectProvider();