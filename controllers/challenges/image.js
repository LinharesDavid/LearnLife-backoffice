module.exports = server => {
    const Challenge = server.models.Challenge;

    return (req, res, next) => {
        let url = req.file.path;
        url = url.substring(url.indexOf('/'), url.length);
        Challenge.findByIdAndUpdate(req.params.id, {$set: {imageUrl: url}})
            .then(challenge => res.send(challenge))
            .catch(error => res.status(500).send(error))
    }
};
