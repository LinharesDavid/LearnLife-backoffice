module.exports = server => {
    const Badge = server.models.Badge;

    return (req, res, next) => {
        Badge.findById(req.params.id)
            .then(badge=> res.send(badge))
            .catch(error => res.status(500).send(error))
    }
};