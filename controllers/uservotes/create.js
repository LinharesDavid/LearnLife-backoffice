module.exports = server => {
    const Vote = server.models.UserVote;

    return (req, res, next) => {
        Vote.create(req.body)
            .then(vote => res.status(201).send(vote))
            .catch(error => res.status(500).send(error))
    }
};
