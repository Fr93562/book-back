/**
 * @controller
 */
class ErrorController {
    /**
     * @public
     * Route inexistante
     * @param {object} req 
     * @param {object} res
     * @return - response
     */
    notFound(req, res) {
        const response = { message: 'Not found' };
        return res.status(404).send(response);
    }

    /**
     * @public
     * Route inexistante
     * @param {object} req 
     * @param {object} res
     * @return - response
     */
    empty(req, res) {
        const response = { message: 'Empty body' };
        return res.status(400).send(response);
    }

    /**
     * @public
     * Indique sur l'utilisateur n'est pas connecté
     * @param {object} req 
     * @param {object} res
     * @return - response
     */
    forbidden(req, res) {
        const response = { message: 'Invalids credentials' };
        return res.status(401).send(response);
    }

    /**
     * @public
     * Indique sur l'utilisateur n'est pas connecté
     * @param {object} req 
     * @param {object} res
     * @return - response
     */
    unauthorized(req, res) {
        const response = { message: 'Not authentified' };
        return res.status(401).send(response);
    }

    /**
     * @public
     * Indique sur l'utilisateur est déjà connecté
     * @param {object} req 
     * @param {object} res
     * @return - response
     */
    alreadyAuthorized(req, res) {
        const response = { message: 'Already authentified' };
        return res.status(403).send(response);
    }
};

module.exports = new ErrorController();