const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    },
    location:{
        type: String,

    },
    bio:{
        type: String,
    },
    favourites:
        [ {themeId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'themes'
        }, themeName:{
            type: String
        }}]
  
           
        
})

module.exports = User = mongoose.model('learners', UserSchema)