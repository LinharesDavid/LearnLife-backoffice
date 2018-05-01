const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const States = {
    PROPOSED: 0,
    DECLINED: 1,
    ACCEPTED: 2,
    FAILED: 3,
    SUCCEED: 4
};

const UserChallengeSchema = Schema({
    challenge: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    state: {
        type: Number,
        required: true,
        defaultValue: States.PROPOSED
    }
});

const UserChallenge = mongoose.model('UserChallenge', UserChallengeSchema);

module.exports = UserChallenge;