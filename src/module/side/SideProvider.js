const mock = require('../../mock/sideProject');

function get(id) {
    const side = mock[i];

    return side;
}

function getAll() {
    const listSide = mock;

    return listSide;
}

function create(sideProject) {
    const result = 'done';
    return result;
}

function update(id) {
    const side = mock[i];

    return side;
}

function remove(id) {
    const result = 'done';
    return result;
}

module.exports = {
    get: get,
    getAll: getAll,
    create: create,
    update: update,
    remove: remove,
};