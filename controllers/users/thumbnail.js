module.exports = server => {
    const User = server.models.User;

    return (req, res, next) => {
        let url = req.file.path;
        url = url.substring(url.indexOf('/'), url.length);
        User.findByIdAndUpdate(req.params.id, {$set: {thumbnailUrl: url}})
            .populate({path: 'tags'})
            .then(user => res.send(user))
            .catch(error => res.status(500).send(error))
    }
};


