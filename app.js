const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(expressLayouts);
app.set('view engine', 'ejs');

// import routes
const aboutRoute = require('./routes/about');

// routes
app.use('/about', aboutRoute);

app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Home',
  });
});

app.get('/getcontact', (req, res) => {
  // it used to be app.get()
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Home',
  });
});

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/danielPrivate', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
