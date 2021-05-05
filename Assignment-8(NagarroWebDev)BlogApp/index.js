const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const app = express();
const blogRoutes = require('./routes/blog');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

//Database connecting
mongoose.connect('mongodb://localhost:27017/blogApp', {useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify:false

})
.then(()=>{
    console.log("DB Connected");
}).catch(err=>{
    console.log("Error in DB Connection");
});

//Setting view engine and all
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));//this is for parsing the request body
// override with POST having ?_method=DELETE and PATCH
app.use(methodOverride('_method'));

//use express-session middleware for flash
app.use(session({
    secret: 'roshanjhasecret',
    resave: false,
    saveUninitialized: true
  }));

  //middleware for flash
  app.use(flash());

  //to use it locally everywhere
  app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    next();
});


app.get('/', (req,res)=>{
    res.render('blogpost/blog');
})
//

// database seeded
// seedDB();


//using blog routes
app.use(blogRoutes);


app.listen(3000, (req,res)=>{
    console.log("Server running on port 3000");
});