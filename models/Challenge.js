const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChallengeSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: String,
        required: true,
        select: false
    },
    pointsGiven: {
        type: Number,
        required: true
    },
    duration: {
        type: Date,
        required: true,
        timestamp: true
    }
});

const Challenge = mongoose.model('Challenge', UserSchema);

module.exports = User;