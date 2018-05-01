const router = require('express').Router();

module.exports = server => {
    router
        .get('/:id',
            server.controllers.badges.show
        )

        .get('/',
            server.controllers.badges.list
        )

        .post('/',
            server.middlewares.bodyParser.json(),
            server.controllers.badges.create
        )

        .put('/:id',
            server.middlewares.bodyParser.json(),
            server.controllers.badges.update
        )

        .delete('/:id',
            server.controllers.badges.remove
        );

    server.use('/badges', router);
};