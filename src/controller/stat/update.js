let providerUser = require('../../provider/stat');

function update(raq, res) {
    const user = providerUser.update();
    return res.send(user);
}

module.exports = update;