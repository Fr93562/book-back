let controllerProject = require('./controller/project/Project');
let controllerSide = require('./controller/side/Side');
let controllerStat = require('./controller/stat/Stat');
let controllerUser = require('./controller/user/User');

let middlewareAuth = require('./middleware/authentification/authentification');

function router(app) {

    app.get('/user', controllerUser.get );
    app.put('/user', middlewareAuth, controllerUser.update );

    app.get('/project', controllerProject.getAll );
    app.post('/project', middlewareAuth, controllerProject.post );
    app.put('/project/:id', middlewareAuth, controllerProject.update );
    app.delete('/project/:id', middlewareAuth, controllerProject.delete );

    app.get('/side/:id', controllerSide.get );
    app.get('/side', controllerSide.getAll );
    app.post('/side', middlewareAuth, controllerSide.post );
    app.put('/side/:id', middlewareAuth, controllerSide.update );
    app.delete('/side/:id', middlewareAuth, controllerSide.delete );

    app.get('/stat/:type', middlewareAuth, controllerStat.getAll );
    app.put('/stat', middlewareAuth, controllerStat.update );
};

module.exports = router;