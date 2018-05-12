module.exports = server => {
    return {
        get: require('./get')(server),
        create: require('./create')(server),
    };
};