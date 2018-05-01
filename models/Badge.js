const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BadgeSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        select: false
    },
    thumbnail: {
        type: Schema.Types.Mixed,
        required: true
    },
    achievementPoints: {
      type: Number,
      required: true
    }
});

const Badge = mongoose.model('Badge', BadgeSchema);

module.exports = Badge;