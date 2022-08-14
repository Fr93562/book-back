let providerSideProject = require('../../provider/side');

function update(raq, res) {
    const sideProject = providerSideProject.update(1);
    return res.send(sideProject);
}

module.exports = update;