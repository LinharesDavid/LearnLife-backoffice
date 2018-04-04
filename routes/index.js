module.exports = server => {
    require('./users')(server);
    require('./auth')(server);
    require('./challenges')(server);
};