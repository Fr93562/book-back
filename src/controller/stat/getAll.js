let providerUser = require('../../provider/stat');

function getAll(raq, res) {
    const stats = providerUser.getAll();
    return res.send(stats);
}

module.exports = getAll;