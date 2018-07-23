module.exports = server => {
    const UserChallenge = server.models.UserChallenge;

    return (req, res, next) => {
        UserChallenge.find({user: req.params.userId})
            .populate({path: 'challenge'})
            .then(uc => res.send(uc))
            .catch(err => err.message || err)
    }
};