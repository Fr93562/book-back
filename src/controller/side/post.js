let providerSideProject = require('../../provider/side');

function post(raq, res) {
    const sideProject = providerSideProject.create(1);
    return res.send(sideProject);
}

module.exports = post;