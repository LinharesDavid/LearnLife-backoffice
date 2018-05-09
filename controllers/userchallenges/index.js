module.exports = server => {
    return {
        get: require('./get')(server),
    };
};