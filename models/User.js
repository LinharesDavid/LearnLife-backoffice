const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    userChallenges: [{
        type: Schema.Types.ObjectId,
        required: false
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        required: false
    }],
    thumbnail: {
        type: Schema.Types.Mixed,
        required: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;