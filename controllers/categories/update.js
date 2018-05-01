module.exports = server => {
    const Category = server.models.Category;

    return (req, res, next) => {
        Category.findByIdAndUpdate(req.params.id, req.body)
            .then(category=> res.send(category))
            .catch(error => res.status(500).send(error.message || error))
    }
};