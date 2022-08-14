let providerProject = require('../../provider/project');

function remove(raq, res) {
    const sideProject = providerProject.remove(1);
    return res.send(sideProject);
}

module.exports = remove;