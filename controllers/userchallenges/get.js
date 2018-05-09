module.exports = server => {
    const Challenge = server.models.Challenge;
    const User = server.models.User;

    return (req, res, next) => {
        User.findById(req.params.id)
            .then(user => Challenge.find({tags: user.tags}))
            .then(challenge => res.sendStatus(200).send(challenge))
            .catch(error => res.status(500).send(error.message || error))
    }
};