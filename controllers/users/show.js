module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        User.findById(req.params.id)
            .populate({path: 'badges'})
            .populate({path: 'tags'})
            .then(user => res.send(user))
            .catch(error => res.status(500).send(error))
    }
};


