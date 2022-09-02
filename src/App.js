let express = require('express');
let bodyParser = require('body-parser')
let router = require('./Router');
let config = require('./configs/server');

class App {
    api = '';

    /**
     * @private
     * Conserve l'application express dans l'instance
     * @param {server} api 
     */
    setApi(api) {
        this.api = api;
    }

    /**
     * @public
     * Démarre l'application express
     */
    init() {
        this.setApi(express());

        this.api.use(express.json());
        this.api.use(bodyParser.json());
        this.api.use(bodyParser.urlencoded({ extended: true }));

        router.dispatch(this.api);
        this.api.listen(config.port);

        console.log(`Server is currently runnig on port ${config.port} : http://localhost:${config.port}/`);
    }
};

module.exports = new App();