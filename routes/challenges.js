const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/medias/challenges/' });

module.exports = server => {
    router
        .get('/community',
            server.controllers.challenges.list_community
        )

        .get('/community/:id',
            server.controllers.challenges.list_user
        )

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

        .post('/:id/image',
            upload.single('image'),
            server.controllers.challenges.image
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