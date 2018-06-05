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

    return (req, res, next) => {
        let userId = req.params.id;

        User.findById(req.params.id)
            .then(user => Challenge.find({ tags : { $in : user.tags }}))
            .then(challenges => getUserChallenges(challenges))
            .then(userChallenges => res.send(userChallenges))
            .catch(error => res.status(500).send(error.message || error))

        function getUserChallenges(challenges) {
            let collection = [];
            let finalCollectionLength = challenges.length;
            
            if(finalCollectionLength == 0) return collection;

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
                            if (collection.length == finalCollectionLength) {
                                resolve(collection);
                            }
                        })
                })
            });
        }

        function findUserChallenge(challenge) {
            return UserChallenge
                .findOne({user: userId, challenge: challenge.id})
                .populate({path: 'challenge'});
        }


        function createUserChallenge(challenge) {
            return UserChallenge
                .create({user: userId, challenge: challenge.id, state: States.PROPOSED})
                .populate({path: 'challenge'});
        }

        function isUserChallengeValid(userChallenge) {
            return userChallenge.state == States.PROPOSED;
        }
    }
};