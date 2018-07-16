const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserVoteSchema = Schema({
    challenge: {
        type: Schema.Types.ObjectId,
        ref: 'Challenge',
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const UserVote = mongoose.model('UserVote', UserVoteSchema);

module.exports = UserVote;