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
        defaultValue: 0
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: false
    }],
    thumbnail: {
        type: Schema.Types.Mixed,
        required: false
    },
    role: {
        type: Number,
        required: true,
        defaultValue: Roles.USER
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;