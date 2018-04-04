module.exports = server => {
    const Challenge = server.models.Challenge;

    return (req, res, next) => {
        Challenge.findById(req.params.id)
            .then(challenge => res.send(challenge))
            .catch(error => res.status(500).send(error))
    }
};