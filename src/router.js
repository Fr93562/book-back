const paths = require('./config/paths');

let controllerProject = require('./controller/project/Project');
let controllerSide = require('./controller/side/Side');
let controllerStat = require('./controller/stat/Stat');
let controllerUser = require('./controller/user/User');

let middlewareAuth = require('./middleware/authentification/authentification');

function router(app) {

    app.get(paths.user, controllerUser.get );
    app.put(paths.user, middlewareAuth, controllerUser.update );

    app.get(paths.project, controllerProject.getAll );
    app.post(paths.project, middlewareAuth, controllerProject.post );
    app.put(`${paths.project}/:id`, middlewareAuth, controllerProject.update );
    app.delete(`${paths.project}/:id`, middlewareAuth, controllerProject.delete );

    app.get(`${paths.side}/:id`, controllerSide.get );
    app.get(paths.side, controllerSide.getAll );
    app.post(paths.side, middlewareAuth, controllerSide.post );
    app.put(`${paths.side}/:id`, middlewareAuth, controllerSide.update );
    app.delete(`${paths.side}/:id`, middlewareAuth, controllerSide.delete );

    app.get(`${paths.stat}/:id`, middlewareAuth, controllerStat.getAll );
    app.put(paths.stat, middlewareAuth, controllerStat.update );
};

module.exports = router;