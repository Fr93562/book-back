const mock = require('../../mock/projects');

function getAll() {
    const listSideProject = mock;

    return listSideProject;
}

function create(sideProject) {
    const result = 'done';
    return result;
}

function update(id) {
    const sideProject = mock[i];

    return sideProject;
}

function remove(id) {
    const result = 'done';
    return result;
}

module.exports = {
    getAll: getAll,
    create: create,
    update: update,
    remove: remove,
};