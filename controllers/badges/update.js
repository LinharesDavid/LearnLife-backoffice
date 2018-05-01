module.exports = server => {
    const Badge = server.models.Badge;

    return (req, res, next) => {
        Badge.findByIdAndUpdate(req.params.id, req.body)
            .then(badge => res.send(badge))
            .catch(error => res.status(500).send(error.message || error))
    }
};