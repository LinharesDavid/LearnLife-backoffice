const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = Schema({
    name: {
      type: String,
      required: true
    },
    tagAssociated: [{
        type: Schema.Types.ObjectId,
        required: false
    }],
    category: {
        type: Schema.Types.ObjectId,
        required: true
    }

});

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;