const router = require('express').Router();

module.exports = server => {
    router
        .get('/:id',
            server.controllers.categories.show
        )

        .get('/',
            server.controllers.categories.list
        )

        .post('/',
            server.middlewares.bodyParser.json(),
            server.controllers.categories.create
        )

        .put('/:id',
            server.middlewares.bodyParser.json(),
            server.controllers.categories.update
        )

        .delete('/:id',
            server.controllers.categories.remove
        );

    server.use('/categories', router);
};