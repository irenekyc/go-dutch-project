const mongoose = require ('mongoose')

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'learners'
    },
    bio: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    favourites: [{
        theme:{
             type: mongoose.Schema.Types.ObjectId,
             ref: 'theme'
        }
    }]
     //@TO ADD followers
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)