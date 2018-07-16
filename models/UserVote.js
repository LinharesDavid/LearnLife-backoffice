const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserVotesSchema = Schema({
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

const UserVotes = mongoose.model('UserVotes', UserVotesSchema);

module.exports = UserVotes;