const paths = require('./config/paths');

let controllerAuthenfication = require('./controller/authentification/Authentification');
let controllerProject = require('./controller/project/Project');
let controllerSide = require('./controller/side/Side');
let controllerStat = require('./controller/stat/Stat');
let controllerUser = require('./controller/user/User');

let middlewareSecurity = require('./middleware/security/logged');

class Router {
    /**
     * @private
     * Retourne le paramètre en cas de ciblage
     * @returns - string
     */
    addParam() {
        const param = '/:id';
        return param;
    }

    /**
     * @public
     * Transmets req/res aux différentes routes
     * @param {express} app 
     */
    dispatch(app) {
        app.post(paths.login, middlewareSecurity.unlogged, controllerAuthenfication.login );


        app.get(paths.user, controllerUser.get );
        app.put(paths.user, middlewareSecurity.logged, controllerUser.update );
    
        app.get(paths.project, controllerProject.getAll );
        app.post(paths.project, middlewareSecurity.logged, controllerProject.post );
        app.put(`${paths.project}${this.addParam()}`, middlewareSecurity.logged, controllerProject.update );
        app.delete(`${paths.project}${this.addParam()}`, middlewareSecurity.logged, controllerProject.delete );
    
        app.get(`${paths.side}${this.addParam()}`, controllerSide.get );
        app.get(paths.side, controllerSide.getAll );
        app.post(paths.side, middlewareSecurity.logged, controllerSide.post );
        app.put(`${paths.side}${this.addParam()}`, middlewareSecurity.logged, controllerSide.update );
        app.delete(`${paths.side}${this.addParam()}`, middlewareSecurity.logged, controllerSide.delete );
    
        app.get(`${paths.stat}${this.addParam()}`, middlewareSecurity.logged, controllerStat.getAll );
        app.put(paths.stat, middlewareSecurity.logged, controllerStat.update );
    }
};

module.exports = new Router();