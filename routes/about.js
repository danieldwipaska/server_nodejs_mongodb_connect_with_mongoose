const express = require('express');

const router = express.Router();

const Post = require('../models/Post');
// Routes
// get -> user sends a request to open s.t
// post -> user sends a form
// delete -> user sends a request to delete s.t
// patch -> user updates s.t

router.get('/', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About',
  });
});

router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
