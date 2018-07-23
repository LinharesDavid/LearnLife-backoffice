const ACCEPTED = 2;

module.exports = server => {
    const UserChallenge = server.models.UserChallenge;

    return (req, res, next) => {
        UserChallenge.findById(req.params.id)
            .populate({path: 'challenge'})
            .then(userChallenge => {
                userChallenge.state = ACCEPTED;
                userChallenge.startDate = Date.now();
                userChallenge.endDate = Date.now() + userChallenge.challenge.duration * 1000;
                userChallenge.save();
                res.send(userChallenge)
            })
            .catch(error => res.status(500).send(error.message || error))
    }
};