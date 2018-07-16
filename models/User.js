const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Roles = {
    USER: 0,
    ADMINISTRATOR: 1
};

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
    badges: [{
        type: Schema.Types.ObjectId,
        ref: 'Badge',
        required: false,
        select: true
    }],
    points: {
        type: Number,
        required: false,
        default: 0
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: false
    }],
    thumbnailUrl: {
        type: String,
        default: "/medias/challenges/f7974661878d4fea8c87ba33e41cc6ac"
    },
    role: {
        type: Number,
        default: Roles.USER
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;