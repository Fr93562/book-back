let user = require('./controller/user');
let project = require('./controller/project');
let side = require ('./controller/side');
let stat = require('./controller/stat');
function router(app) {

    app.get('/user', user.get );
    app.put('/user', user.update );

    app.get('/project', project.getAll );
    app.post('/project', project.post );
    app.put('/project', project.update );
    app.delete('/project', project.remove );

    app.get('/side/:id', side.get );
    app.get('/side', side.getAll );
    app.post('/side', side.post );
    app.put('/side', side.update );
    app.delete('/side', side.remove );

    app.get('/stat', stat.getAll );
    app.put('/stat', stat.update );
};

module.exports = router;