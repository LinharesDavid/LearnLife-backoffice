module.exports = server => {
    const Challenge = server.models.Challenge;

    return (req, res, next) => {
        Challenge.find({user: {$ne : null}, verified: 0})
            .then(challenges=> res.send(challenges))
            .catch(error => res.status(500).send(error.message || error))
    }
};


