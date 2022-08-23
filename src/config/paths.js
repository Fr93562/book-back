const server = require('./server');

const paths = {
    user: `${server.url}/user`,
    project: `${server.url}/project`,
    side: `${server.url}/side`,
    stat: `${server.url}/stat`,
};

module.exports = paths;