const FAILED = 3;

module.exports = server => {
    const UserChallenge = server.models.UserChallenge;

    return (req, res, next) => {
        UserChallenge.update({_id: req.params.id}, { $set : { state:  FAILED }})
            .then(res.send(200))
            .catch(error => res.status(500).send(error.message || error))
    }
};