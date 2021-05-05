const express= require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Review = require('../models/review');


//displaying all blogs
router.get('/blogs',async(req,res)=>{
   const blogs =  await Blog.find({});

   res.render('blogpost/index',{blogs});
});

//showing form for new blog
router.get('/blogs/new', async(req,res)=>{
    res.render('blogpost/new');
})

//creating new blog
router.post('/blogs', async(req,res)=>{
    try{
  await Blog.create(req.body);
  req.flash('success','Blog Created Successfully');
  res.redirect('/blogs');
    }catch(err){
        console.log(err.message);
    }
});

//show the particular blog
router.get('/blogs/:id', async(req,res)=>{
    const blog = await Blog.findById(req.params.id).populate('reviews');
    res.render('blogpost/show',{blog});
});

//show edit form 
router.get('/blogs/:id/edit', async(req,res)=>{
    const blog = await Blog.findById(req.params.id);
    res.render('blogpost/edit',{blog});
})

//updating the blog
router.patch('/blogs/:id', async(req,res)=>{
 await Blog.findByIdAndUpdate(req.params.id, req.body);
 req.flash('success','Blog Edited Successfully');
  res.redirect(`/blogs/${req.params.id}`);
})

//deleting the blog
router.delete('/blogs/:id', async(req,res)=>{
    await Blog.findByIdAndDelete(req.params.id);
    req.flash('success','Blog Deleted Successfully');
    res.redirect('/blogs');
})

//displaying comments
router.post('/blogs/:id/review', async(req, res) => {
   try{
    const blog = await Blog.findById(req.params.id);
    const review = new Review(req.body);

    blog.reviews.push(review);

    await review.save();
    await blog.save();
    req.flash('success','Comment Added Successfully');
    res.redirect(`/blogs/${req.params.id}`);

   }
   catch(err){
       console.log(err.message);
   }
});










module.exports = router;