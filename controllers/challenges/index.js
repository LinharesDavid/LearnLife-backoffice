module.exports = server => {
    return {
        show: require('./show')(server),
        list: require('./list')(server),
        create: require('./create')(server),
        update: require('./update')(server),
        remove: require('./remove')(server),
        list_community: require('./list_community')(server),
        list_user: require('./list_user')(server),
        image: require('./image')(server)
    };
};