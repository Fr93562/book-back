let providerUser = require('../../provider/user');

function update(raq, res) {
    const user = providerUser.update();
    return res.send(user);
}

module.exports = update;