let providerProject = require('../../provider/project');

function update(raq, res) {
    const sideProject = providerProject.update(1);
    return res.send(sideProject);
}

module.exports = update;