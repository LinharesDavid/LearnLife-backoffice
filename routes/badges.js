const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/medias/badges/' });

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

        .put('/:id/image',
            upload.single('image'),
            server.controllers.badges.thumbnail
        )

        .delete('/:id',
            server.controllers.badges.remove
        );

    server.use('/badges', router);
};