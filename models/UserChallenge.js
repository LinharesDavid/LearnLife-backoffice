const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserChallengeSchema = Schema({
    challenge: {
        type: Schema.type.ObjectId,
        required: true,
    },
    user: {
        type: Schema.type.ObjectId,
        required: true
    },
    state: {
        type: Number,
        required: true
    }
});

const UserChallenge = mongoose.model('UserChallenge', UserChallengeSchema);

module.exports = UserChallenge;