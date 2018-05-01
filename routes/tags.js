const router = require('express').Router();

module.exports = server => {
    router
        .get('/:id',
            server.controllers.tags.show
        )

        .get('/',
            server.controllers.tags.list
        )

        .post('/',
            server.middlewares.bodyParser.json(),
            server.controllers.tags.create
        )

        .put('/:id',
            server.middlewares.bodyParser.json(),
            server.controllers.tags.update
        )

        .delete('/:id',
            server.controllers.tags.remove
        );

    server.use('/tags', router);
};