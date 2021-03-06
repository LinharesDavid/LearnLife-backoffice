module.exports = server => {
    const Challenge = server.models.Challenge;

    return (req, res, next) => {
        Challenge.findByIdAndRemove(req.params.id)
            .then(challenge=> res.send(challenge))
            .catch(error => res.status(500).send(error.message || error))
    }
};