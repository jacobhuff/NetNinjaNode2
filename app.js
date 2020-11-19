const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// middleware
// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log('in the next middleware');
//   next();
// });

// middleware & static files
app.use(express.static('public'));

// listen for requests
app.listen(3000);
app.use(morgan('dev'));

// register view engine
app.set('view engine', 'ejs');

const blogs = [
  { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
];


// index
app.get('/', (req, res) => {
  res.render('index', { title: 'Home', blogs });
});

// about
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// create
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});