module.exports = server => {
    const UserChallenge = server.models.UserChallenge;

    return (req, res, next) => {
        UserChallenge.find({userId: req.params.id})
            .populate({path: 'challenge'})
            .then(uc => res.send(uc))
            .catch(err => err.message || err)
    }
};