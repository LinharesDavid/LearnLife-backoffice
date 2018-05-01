module.exports = server => {
    const Tag = server.models.Tag;

    return (req, res, next) => {
        Tag.findByIdAndUpdate(req.params.id, req.body)
            .then(tag => res.send(tag))
            .catch(error => res.status(500).send(error.message || error))
    }
};