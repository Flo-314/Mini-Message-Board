var express = require('express');
var router = express.Router();

const messages = [
  {
    title: "this is the titile",
    text: "this si the description",
    user: "this is the user",
    date: "this is the date"
  },
  {
    title:"A NEW POST",
    text: "Hello World!",
    user: "Charles",
    date: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});
// Post From new
router.post("/new", (req,res,next) =>{
    
  
  const newPost = {
    title: req.body.title,  
    text: req.body.msg,
    user: req.body.username,
    date: new Date(),
    }
    messages.push(newPost)
  res.redirect('/')
})


module.exports = router;
