module.exports = server => {
    return {
        get: require('./get')(server),
        create: require('./create')(server),
        accept: require('./accept')(server),
        declined: require('./declined')(server),
        succeed: require('./succeed')(server),
        failed: require('./failed')(server)
    };
};