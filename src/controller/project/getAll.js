let providerProject = require('../../provider/project');

function getAll(raq, res) {
    const listSideProject = providerProject.getAll();
    return res.send(listSideProject);
}

module.exports = getAll;