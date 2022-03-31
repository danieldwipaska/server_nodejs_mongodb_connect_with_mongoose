const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Home',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About',
  });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
