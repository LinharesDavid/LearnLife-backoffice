module.exports = server => {
    const Challenge = server.models.Challenge;

    return (req, res, next) => {
        Challenge.findByIdAndUpdate(req.params.id, req.body)
            .then(challenge => res.send(challenge))
            .catch(error => res.status(500).send(error.message || error))
    }
};