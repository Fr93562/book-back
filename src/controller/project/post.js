let providerProject = require('../../provider/project');

function post(raq, res) {
    const sideProject = providerProject.create(1);
    return res.send(sideProject);
}

module.exports = post;