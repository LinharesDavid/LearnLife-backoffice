module.exports = server => {
    const UserChallenge = server.models.UserChallenge;

    return (req, res, next) => {
        UserChallenge.create(req.body)
            .then(userchallenge => res.status(201).send(userchallenge))
            .catch(error => res.status(500).send(error))
    }
};