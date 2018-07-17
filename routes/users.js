const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/medias/users/' });

module.exports = server => {

    router
        .get('/:id',
            server.controllers.users.show
        )

        .get('/',
            server.controllers.users.list
        )

        .post('/',
            server.middlewares.bodyParser.json(),
            server.controllers.users.create
        )

        .post
        ('/:id/thumbnail',
            upload.single('image'),
            server.controllers.users.thumbnail

        )

        .put('/:id',
            server.middlewares.bodyParser.json(),
            server.controllers.users.update
        )

        .delete('/:id',
            server.controllers.users.remove
        );

    server.use('/users', router);
};