module.exports = server => {
    server.controllers = {
        users: require('./users')(server),
        auth: require('./auth')(server)
    }
};