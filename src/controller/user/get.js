let providerUser = require('../../provider/user');

function get(raq, res) {
    const user = providerUser.get();
    return res.send(user);
}

module.exports = get;