module.exports = server => {
    return {
        list: require('./list')(server),
        create: require('./create')(server),
        user_list: require('./user_list')(server)
    };
};