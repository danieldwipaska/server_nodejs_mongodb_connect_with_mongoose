const express = require('express'); // importing "Express" package for creating server
const app = express(); // Express must be executed first
const port = 3000; // listen port
const expressLayouts = require('express-ejs-layouts'); // importing "express-ejs-layouts" package for applying main-layouts
const mongoose = require('mongoose'); // importing "mongoose" package for accessing database (add, delete, and update)
const bodyParser = require('body-parser'); // importing "bodyParser" package for parsing incoming request bodies in a middleware

app.use(bodyParser.json()); // Applying bodyParser.json for all requests // bodyParser.json([option]) is to return middleware that only parses json and only looks at requests where the Content-Type header matches the type option

app.use(expressLayouts); // Applying express-ejs-layouts, that is, views folder

app.set('view engine', 'ejs'); // importing "ejs" package to apply 'view engine'

// import routes from folder routes
const aboutRoute = require('./routes/about'); // import about.js from folder routes

// routes
app.use('/about', aboutRoute); // use about.js from folder routes

app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Home',
  });
});

// Connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/danielPrivate', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'));

// listening a port
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
