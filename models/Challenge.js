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
        default: "/medias/defaults/929c39aeefaff5eef874546db98689d0"
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