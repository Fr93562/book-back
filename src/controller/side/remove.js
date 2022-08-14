let providerSideProject = require('../../provider/side');

function remove(raq, res) {
    const sideProject = providerSideProject.remove(1);
    return res.send(sideProject);
}

module.exports = remove;