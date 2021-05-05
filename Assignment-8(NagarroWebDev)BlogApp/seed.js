const mongoose = require('mongoose');
const Blog = require('./models/blog');

//creating Sample inputs 
const blog = [
    {
        name: "How, The World is Evolving",
        username:"Rohini Thakur",
        image:"https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ybGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "he term world refers to the totality of entities, to the whole of reality or to everything that was, is and will be. The nature of the world has been conceptualized differently in different fields. Some conceptions see the world as unique while others talk of a . Some treat the world as one simple object while others analyze the world as a complex made up of many parts. In scientific cosmology the world or universe is commonly defined as the totality of all space and time; all that is, has been, and will be. Theories of modality, on the other hand, talk of possible worlds as complete and consistent ways how things could have been. Phenomenology, starting from the horizon of co-given objects present in the periphery of every experience, defines the world as the biggest horizon or the horizon of all horizons. In philosophy of mind, the world is commonly contrasted with the mind as that which is represented by the mind. Theology conceptualizes the world in relation to God, for example, as God's creation, as identical to God or as the two being interdependent. In religions, there is often a tendency to downgrade the material or sensory world in favor of a spiritual world to be sought through religious practice. A comprehensive representation of the world and our place in it, as is commonly found in religions, is known as a worldview. Cosmogony is the field that studies the origin or creation of the world while eschatology refers to the science or doctrine of the last things or of the end of the world."
    },
    {
        name: "Internet is a boon",
        username:"Rahul Jha",
        image:"https://images.unsplash.com/photo-1610034463992-aea5e8f62d89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJuZXQlMjBjb25uZWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "Internet is indeed a boon, because it is one of the biggest revolution in the world.The Internet has opened up new opportunities for trade and industry and brought a wealth of information. It also proved a boon and guiding factor for millions of students across the globe.Internet is a boon but it becomes a bane when misused as it may cause some ill- effects on the youth. These ill effects can be avoided by making students internet mature.The Internet is said to be a pool of information wherein you can find information on any topic. It is the best place to gain knowledge and information along with being in constant touch with your dear ones.  The internet can be a fantastic place for kids of all ages provided you teach your child to distinguish between the right and wrong of the internet."

    }
]

 const seedDB = async()=>{

  await Blog.insertMany(blog);
    console.log("DB Seeded");
 }



 module.exports = seedDB;