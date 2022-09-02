const paths = require('./configs/paths');

let middlewareAuth = require('./middlewares/middlewareAuth');
let middlewareBody = require('./middlewares/middlewareBody');

let controllerAuthenfication = require('./modules/auth/AuthController');
let controllerProject = require('./modules/project/ProjectController');
let controllerSide = require('./modules/side/SideController');
let controllerStat = require('./modules/stat/StatController');
let controllerUser = require('./modules/user/UserController');


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
        app.post(paths.login, middlewareAuth.isNotLogged, middlewareBody, controllerAuthenfication.login );

        app.get(paths.user, controllerUser.get );
        app.put(paths.user, middlewareAuth.isLogged, middlewareBody, controllerUser.update );
    
        app.get(paths.project, controllerProject.getAll );
        app.post(paths.project, middlewareAuth.isLogged, middlewareBody, controllerProject.post );
        app.put(`${paths.project}${this.addParam()}`, middlewareAuth.isLogged, middlewareBody, controllerProject.update );
        app.delete(`${paths.project}${this.addParam()}`, middlewareAuth.isLogged, middlewareBody, controllerProject.delete );
    
        app.get(`${paths.side}${this.addParam()}`, controllerSide.get );
        app.get(paths.side, controllerSide.getAll );
        app.post(paths.side, middlewareAuth.isLogged, middlewareBody, controllerSide.post );
        app.put(`${paths.side}${this.addParam()}`, middlewareAuth.isLogged, middlewareBody, controllerSide.update );
        app.delete(`${paths.side}${this.addParam()}`, middlewareAuth.isLogged, middlewareBody, controllerSide.delete );
    
        app.get(`${paths.stat}`, middlewareAuth.isLogged, middlewareBody, controllerStat.getAll );
        app.put(paths.stat, middlewareAuth.isLogged, middlewareBody, controllerStat.update );
    }
};

module.exports = new Router();