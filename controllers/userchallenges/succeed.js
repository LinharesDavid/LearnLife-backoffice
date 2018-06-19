const SUCCEED = 4;

module.exports = server => {
    const UserChallenge = server.models.UserChallenge;
    const User = server.models.User;
    const Challenge = server.models.Challenge;
    const Badge = server.models.Badge;
    let userPoints = 0;
    let user;
    let challenge;
    let earnedBadges = [];

    return (req, res, next) => {
        UserChallenge.findByIdAndUpdate(req.params.id, { $set : { state:  SUCCEED }})
            .then(uc => appendPointsToUser(uc))
            .then(appendBadgesToUser)
            .then(() => res.send(earnedBadges))
            .catch(error => res.status(500).send(error.message || error))
    }

    function appendPointsToUser(userChallenge) {
        userId = userChallenge.user;
        return getUserPoints(userId)
            .then(points => userPoints = points)
            .then(() => getChallengePoints(userChallenge.challenge))
            .then(points => userPoints += points)
            .then(() => updateUserPoints(userPoints));
    }

    function getUserPoints(userId) {
        return User.findById(userId)
            .then(u => user = u)
            .then(() => user.points)
    }

    function getChallengePoints(challengeId) {
            return Challenge.findById(challengeId)
                .then(c => challenge = c)
                .then(() => challenge.pointsGiven);
    }

    function updateUserPoints(points) {
        user.points = points;
        user.save();
    }

    function retrieveBadges() {
        let badges = [];
        return Badge
            .find({achievementPoints: {$lte : userPoints}})
            .then(b => badges = b)
            .then(() => getUserBadges())
            .then(b => {
                if(b == null || b.length < 1) b = [];
                earnedBadges = filterBadges(b, badges);
                badges = badges.concat(b);
                return badges;
            })
            .catch(err => console.log(err));
    }

    function filterBadges(userBadges, allBadges) {
        for(let i = 0; i < allBadges.length; i++) {
            for (let j = 0; j < userBadges.length; j++) {
                if(allBadges[i].name == userBadges[j].name) {
                    allBadges.splice(i, 1);
                }
            }
        }

        return allBadges;
    }

    function pushBadges(badges) {
        return User.findByIdAndUpdate(user.id, { badges: badges});
    }

    function getUserBadges() {
        return User.findById(user.id)
            .populate({path: 'badges'})
            .then(user => user.badges);
    }

    function appendBadgesToUser() {
        return retrieveBadges()
            .then(badges => pushBadges(badges));
    }
};