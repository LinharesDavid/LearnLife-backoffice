module.exports = server => {
    const Category = server.models.Category;

    return (req, res, next) => {
        Category.findById(req.params.id)
            .then(category=> res.send(category))
            .catch(error => res.status(500).send(error))
    }
};