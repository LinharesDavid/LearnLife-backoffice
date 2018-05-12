const router = require('express').Router();

module.exports = server => {
    router
        .get('/:id',
            server.controllers.userchallenges.get
        )
        .post('/',
            server.middlewares.bodyParser.json(),
            server.controllers.userchallenges.create
        )

    server.use('/userchallenges', router);
};