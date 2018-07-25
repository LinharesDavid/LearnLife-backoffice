const Promise = require('bluebird');
const States = {
    PROPOSED: 0,
    DECLINED: 1,
    ACCEPTED: 2,
    FAILED: 3,
    SUCCEED: 4
};

module.exports = server => {
    const Challenge = server.models.Challenge;
    const User = server.models.User;
    const UserChallenge = server.models.UserChallenge;
    const Tag = server.models.Tag;

    return (req, res, next) => {
        let userId = req.params.id;
        let user;

        User.findById(req.params.id)
            .populate({path: 'tags'})
            .then(u => {
                user = u;
                return getChallenges(user.tags);
            })
            .then(challenges => (challenges.length !== 0) ? challenges : getClosestChallenges(user.tags))
            .then(challenges => getUserChallenges(challenges))
            .then(userChallenges => res.send(userChallenges))
            .catch(error => res.status(500).send(error.message || error));

        function getUserChallenges(challenges) {
            let collection = [];
            let finalCollectionLength = challenges.length;

            if(finalCollectionLength === 0) return collection;

            return new Promise(resolve => {
                challenges.forEach(c => {
                    findUserChallenge(c)
                        .then(uc => uc || createUserChallenge(c))
                        .then(uc => {
                            if (isUserChallengeValid(uc))
                                collection.push(uc);
                            else
                                finalCollectionLength--;
                        })
                        .then(() => {
                            if (collection.length === finalCollectionLength) {
                                if(finalCollectionLength === 0)
                                    resolve(getClosestChallenges(user.tags)
                                        .then(challenges => getUserChallenges(challenges)));
                                else
                                    resolve(collection);
                            }
                        })
                })
            });
        }

        function getChallenges(tags) {
            return Challenge
                .find({ tags : { $in : tags || user.tags }})
                .populate({path: 'tags'})
                .then(challenges => challenges.filter(c => !c.user || c.verified || c.user == userId));

        }

        function getClosestChallenges(tags) {
            categories = [];
            for(let j = 0; j < tags.length; j++) {
                categories.push(tags[j].category)
            }

            return Tag.find({category: {$in: categories}})
                .then(tags => getChallenges(tags));
        }

        function findUserChallenge(challenge) {
            return UserChallenge
                .findOne({user: userId, challenge: challenge.id})
                .populate({path: 'challenge'});
        }


        function createUserChallenge(challenge) {
            return UserChallenge
                .create({user: userId, challenge: challenge.id, state: States.PROPOSED})
                .then(uc => UserChallenge.findById(uc.id).populate({path: 'challenge'}));
        }

        function isUserChallengeValid(userChallenge) {
            return userChallenge.state === States.PROPOSED;
        }
    }
};