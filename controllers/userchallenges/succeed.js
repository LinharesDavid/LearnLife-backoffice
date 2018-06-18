const SUCCEED = 4;

module.exports = server => {
    const UserChallenge = server.models.UserChallenge;
    const User = server.models.User;

    return (req, res, next) => {
        UserChallenge.findByIdAndUpdate(req.params.id, { $set : { state:  SUCCEED }})
            .then(uc => appendPointsToUser(uc))
            .then(res.send(200))
            .catch(error => res.status(500).send(error.message || error))
    }

    function appendPointsToUser(userChallenge) {
        userId = userChallenge.user;
        new Promise(resolve => {
            User.update({_id: userId}, { $set : { points: getUserPoints(userId)} })
                .then(resolve())
        });
    }

    function getUserPoints(userId) {
        return new Promise(resolve => {
           User.findById(userId)
               .then(user => user ? resolve(user.points) : resolve(0))
        });
    }
};