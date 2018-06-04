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
        required: true
    },
    imageUrl:{
        type: String,
        required: true
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
        required: true
    }],
    Badge: {
        type: Schema.Types.ObjectId,
        required: false
    }
});

const Challenge = mongoose.model('Challenge', ChallengeSchema);

module.exports = Challenge;