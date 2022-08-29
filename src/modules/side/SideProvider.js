const mock = require('../../mocks/sideProject');

/**
 * @provider
 */
class SideProject {
    /**
     * @public
     * Récupère un side project
     * @param {integer} id 
     * @returns - object
     */
    get(id) {
        const side = mock[i];
    
        return side;
    }

    /**
     * @public
     * Retourne la liste des sides projects
     * @returns - array
     */
    getAll() {
        const listSide = mock;
    
        return listSide;
    }

    /**
     * Ajoute un side project
     * @param {object} side 
     * @returns - object
     */
    create(side) {
        const result = 'done';
        return result;
    }

    /**
     * Modifie un side project
     * @param {object} id 
     * @returns 
     */
    update(id) {
        const side = mock[i];
    
        return side;
    }

    /**
     * Supprime un side project
     * @param {object} id 
     * @returns 
     */
    delete(project) {
        const result = 'done';
        return result;
    }
}

module.exports = new SideProject();