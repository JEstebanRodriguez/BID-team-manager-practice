import mongoose from 'mongoose'
const { Schema, models, model } = mongoose

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    preferred_position: {
        type: String,
        default: null
    },
    games: {
        game1: {
            type: Number,
            default: 0
        },
        game2: {
            type: Number,
            default: 0
        },
        game3: {
            type: Number,
            default: 0
        }
    }
}, {
    timestamps: false,
    versionKey: false
})

export default models.players || model('Player', PlayerSchema)