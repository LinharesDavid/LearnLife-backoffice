const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChallengeSchema = Schema({
    name: {
        type: String,
        required: true,

    },
    details: {
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        default: "/medias/challenges/a0d5bd9b2617aebdb7c6f3e55935f6a9"
    },
    pointsGiven: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type:Date,
    },
    duration: {
        type: Number,
        required: true
    },
    tags: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Tag'
    }],
    badge: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Badge'
    },
    user: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'User'
    },
    verified: {
        type: Number,
        default: 0
    }
});

const Challenge = mongoose.model('Challenge', ChallengeSchema);

module.exports = Challenge;