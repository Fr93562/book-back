let user = require('./controller/user');
let project = require('./controller/project');
let side = require ('./controller/side');
let stat = require('./controller/stat');

let middlewareAuth = require('./middleware/authentification/authentification');

function router(app) {

    app.get('/user', user.get );
    app.put('/user', middlewareAuth, user.update );

    app.get('/project', project.getAll );
    app.post('/project', middlewareAuth, project.post );
    app.put('/project/:id', middlewareAuth, project.update );
    app.delete('/project/:id', middlewareAuth, project.remove );

    app.get('/side/:id', side.get );
    app.get('/side', side.getAll );
    app.post('/side', middlewareAuth, side.post );
    app.put('/side/:id', middlewareAuth, side.update );
    app.delete('/side/:id', middlewareAuth, side.remove );

    app.get('/stat/:type', middlewareAuth, stat.getAll );
    app.put('/stat', middlewareAuth, stat.update );
};

module.exports = router;