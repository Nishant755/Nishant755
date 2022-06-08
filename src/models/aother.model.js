
    const mongoose = require('mongoose');

    const authorSchema = new mongoose.Schema( {
        Authors:
        {    
    
            author_id:Number,
            author_name:String,
            age:Number,
            address:String
        } 
      
    
    
    },{ timestamps: true });
    
    
    module.exports = mongoose.model('author', authorSchema)