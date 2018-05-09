const router = require('express').Router();

module.exports = server => {
    router
        .get('/:id',
            server.controllers.challenges.get
        )

    server.use('/challenges', router);
};