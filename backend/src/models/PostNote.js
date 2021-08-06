const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
        student:String,
        subject:String,
        type: String,
        value :Number,
    },
    {
        timestamps: true,
    });

  
    module.exports = PostNote = mongoose.model('Post', PostSchema);