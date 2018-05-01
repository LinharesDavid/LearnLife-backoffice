module.exports = server => {
    const Badge = server.models.Badge;

    return (req, res, next) => {
        const data = req.body;

        Badge.create(data)
            .then(badge => res.status(201).send(badge))
            .catch(err => res.send(500).send(err.message || err));
    }
};