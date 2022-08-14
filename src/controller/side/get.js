let providerSideProject = require('../../provider/side');

function get(raq, res) {
    const sideProject = providerSideProject.get(1);
    return res.send(sideProject);
}

module.exports = get;