module.exports = server => {
    const Badge = server.models.Badge;

    return (req, res, next) => {
        Badge.find()
            .then(badges=> res.send(badges))
            .catch(error => res.status(500).send(error.message || error))
    }
};


