module.exports = server => {
    server.controllers = {
        users: require('./users')(server),
        auth: require('./auth')(server),
        challenges: require('./challenges')(server),
        badges: require('./badges')(server),
        tags: require('./tags')(server),
        categories: require('./categories')(server),
        userchallenges: require('./userchallenges')(server)
    }
};