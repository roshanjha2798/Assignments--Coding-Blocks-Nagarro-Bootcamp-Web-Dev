const mongoose = require('mongoose');

//creating blog schema 
const reviewSchema = new mongoose.Schema({
   comment:{
       type:String,
   }
});

//creating models
const Review = mongoose.model('Review',reviewSchema);




module.exports = Review;