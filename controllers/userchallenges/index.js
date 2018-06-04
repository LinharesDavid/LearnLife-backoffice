module.exports = server => {
    return {
        get: require('./get')(server),
        accept: require('./accept')(server),
        declined: require('./declined')(server),
        succeed: require('./succeed')(server),
        failed: require('./failed')(server),
        user_list: require('./user_list')(server)
    };
};