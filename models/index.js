const mongoose = require('mongoose');

module.exports = server => {
    // 1. connect to the database
    mongoose.connect(server.settings.db_uri);

    // 2. attach models to the server
    server.models = {
        User: require('./User'),
        Token: require('./Token')
    }
};