const mongoose = require ('mongoose')

const ThemeSchema = new mongoose.Schema ({
    name:{
        type: String,
        required: true,
    },
    authRequired: {
        type: Boolean,
        required: true,
    },
    content :[{
        dutch:{ 
            type: String,
            required: true
        },
        en: {
            type: String,
            required: true
        }
    }],
    followers: [
        {
            users:  {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'learners' }
        }
        ],
})

module.exports = Theme = mongoose.model('themes', ThemeSchema)