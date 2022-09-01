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
        return res.status(404).render(response);
    }

    /**
     * @public
     * Route inexistante
     * @param {object} req 
     * @param {object} res
     * @return - response
     */
    empty(req, res) {
        const response = { message: 'The body is empty.' };
        return res.status(400).render(response);
    }

    /**
     * @public
     * Indique sur l'utilisateur n'est pas connecté
     * @param {object} req 
     * @param {object} res
     * @return - response
     */
    unauthorized(req, res) {
        const response = { message: 'The user is currently not authentified.' };
        return res.status(401).render(response);
    }

    /**
     * @public
     * Indique sur l'utilisateur est déjà connecté
     * @param {object} req 
     * @param {object} res
     * @return - response
     */
    alreadyAuthorized(req, res) {
        const response = { message: 'The user is already authentified.' };
        return res.status(403).render(response);
    }
};

module.exports = new ErrorController();