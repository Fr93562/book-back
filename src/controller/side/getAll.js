let providerSideProject = require('../../provider/side');

function getAll(raq, res) {
    const listSideProject = providerSideProject.getAll();
    return res.send(listSideProject);
}

module.exports = getAll;