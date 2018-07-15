const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    tagAssociated: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: false
    }],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }

});

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;