module.exports = server => {
    const Tag = server.models.Tag;

    return (req, res, next) => {
        Tag.findByIdAndRemove(req.params.id)
            .then(tag => res.send(tag))
            .catch(error => res.status(500).send(error.message || error))
    }
};