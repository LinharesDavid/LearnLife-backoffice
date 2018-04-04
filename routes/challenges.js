const router = require('express').Router();

module.exports = server => {
    router
        .get('/:id',
            server.controllers.challenges.show
        )

        .get('/',
            server.controllers.challenges.list
        )

        .post('/',
            server.middlewares.bodyParser.json(),
            server.controllers.challenges.create
        )

        .put('/:id',
            server.middlewares.bodyParser.json(),
            server.controllers.challenges.update
        )

        .delete('/:id',
            server.controllers.challenges.remove
        );

    server.use('/challenges', router);
};