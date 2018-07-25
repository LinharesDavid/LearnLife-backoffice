const router = require('express').Router();

module.exports = server => {
    router
        .get('/',
            server.controllers.uservotes.list
        )

        .get('/:id',
            server.middlewares.ensureAuthenticated,
            server.controllers.uservotes.user_list
        )

        .post('/',
            server.middlewares.bodyParser.json(),
            server.middlewares.ensureAuthenticated,
            server.controllers.uservotes.create
        );

    server.use('/uservotes', router);
};