const router = require('express').Router();

module.exports = server => {
    router
        .get('/:id',
            server.middlewares.ensureAuthenticated,
            server.controllers.userchallenges.get
        )
        .get('/getAllForUser/:id',
            server.middlewares.ensureAuthenticated,
            server.controllers.userchallenges.getAllForUser
        )
        .post('/',
            server.middlewares.bodyParser.json(),
            server.middlewares.ensureAuthenticated,
            server.controllers.userchallenges.create
        )
        .put('/:id/accept',
            server.middlewares.ensureAuthenticated,
            server.controllers.userchallenges.accept
        )
        .put('/:id/declined',
            server.middlewares.ensureAuthenticated,
            server.controllers.userchallenges.declined
        )
        .put('/:id/succeed',
            server.middlewares.ensureAuthenticated,
            server.controllers.userchallenges.succeed
        )
        .put('/:id/failed',
            server.middlewares.ensureAuthenticated,
            server.controllers.userchallenges.failed
        )


    server.use('/userchallenges', router);
};