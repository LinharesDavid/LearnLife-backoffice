module.exports = server => {
    require('./users')(server);
    require('./auth')(server);
    require('./challenges')(server);
    require('./categories')(server);
    require('./badges')(server);
    require('./tags')(server);
    require('./userchallenges')(server);
};