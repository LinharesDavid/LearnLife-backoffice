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
    thumbnailUrl: {
        type: Schema.Types.Mixed,
        default: "/medias/badges/e0d15640e3ca47443c618a0ef1947a30"
    },
    achievementPoints: {
      type: Number,
      required: true
    }
});

const Badge = mongoose.model('Badge', BadgeSchema);

module.exports = Badge;