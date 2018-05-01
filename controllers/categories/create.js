module.exports = server => {
    const Category = server.models.Category;

    return (req, res, next) => {
        const data = req.body;

        Category.create(data)
            .then(category=> res.status(201).send(category))
            .catch(err => res.status(500).send(err.message || err));
    }
};