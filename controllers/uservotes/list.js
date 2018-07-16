module.exports = server => {
    const Vote = server.models.UserVote;

    return (req, res, next) => {
        Vote.find()
            .then(votes => res.status(200).send(votes))
            .catch(err => res.status(500).send(err));
    }
};
