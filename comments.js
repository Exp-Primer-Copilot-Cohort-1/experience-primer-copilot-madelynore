// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Set comments array
const comments = [
  {name: 'John', comment: 'I love this place'},
  {name: 'Mary', comment: 'I hate this place'},
  {name: 'Bob', comment: 'I like this place'}
]

// Get home page
app.get('/', (req, res) => {
  res.render('home', {comments: comments});
})

// Get comment page
app.get('/comment', (req, res) => {
  res.render('comment');
})

// Post comment page
app.post('/comment', (req, res) => {
  const newComment = {
    name: req.body.name,
    comment: req.body.comment
  }
  comments.push(newComment);
  res.redirect('/');
})

// Listen to port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
})