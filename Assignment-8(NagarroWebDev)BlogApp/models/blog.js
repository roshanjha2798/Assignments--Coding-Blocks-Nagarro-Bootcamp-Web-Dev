const mongoose = require('mongoose');
const Review = require('./review');

//creating blog schema 
const blogSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    reviews:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Review'
        }
    ]
});

//creating models
const Blog = mongoose.model('Blog',blogSchema);




module.exports = Blog;