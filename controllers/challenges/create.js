module.exports = server => {
    const Challenge = server.models.Challenge;

    return (req, res, next) => {
        const data = req.body;

        Challenge.create(data)
            .then(challenge => res.status(201).send(challenge))
            .catch(err => res.send(500).send(err.message || err));
    }
};