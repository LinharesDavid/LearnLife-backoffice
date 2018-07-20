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
        required: true
    },
    thumbnailUrl: {
        type: Schema.Types.Mixed,
        default: "/medias/defaults/839788b2d09ca200849ba79244cb8cff"
    },
    achievementPoints: {
      type: Number,
      required: true
    }
});

const Badge = mongoose.model('Badge', BadgeSchema);

module.exports = Badge;