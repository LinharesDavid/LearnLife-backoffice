module.exports = server => {
    const Badge = server.models.Badge;

    return (req, res, next) => {
        let url = req.file.path;
        url = url.substring(url.indexOf('/'), url.length);
        Badge.findByIdAndUpdate(req.params.id, {$set: {thumbnailUrl: url}})
            .then(badge => res.send(badge))
            .catch(error => res.status(500).send(error))
    }
};
