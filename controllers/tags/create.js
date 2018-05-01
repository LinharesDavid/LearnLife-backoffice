module.exports = server => {
    const Tag = server.models.Tag;

    return (req, res, next) => {
        const data = req.body;

        Tag.create(data)
            .then(tag => res.status(201).send(tag))
            .catch(err => res.status(500).send(err.message || err));
    }
};