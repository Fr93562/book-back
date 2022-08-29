const paths = require('./configs/paths');

let controllerAuthenfication = require('./modules/auth/AuthController');
let controllerProject = require('./modules/project/ProjectController');
let controllerSide = require('./modules/side/SideController');
let controllerStat = require('./modules/stat/StatController');
let controllerUser = require('./modules/user/UserController');

let middlewareSecurity = require('./middlewares/security/logged');

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

        console.log('here');

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