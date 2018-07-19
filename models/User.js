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
        default: "/medias/defaults/8c8c01f66ce8a4b5191eb11cb903cafb"
    },
    role: {
        type: Number,
        default: Roles.USER
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;