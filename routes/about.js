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

  post // promise
    .save() // mongoose syntax
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// async await style

// add request to database from form
// router.post('/', async (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//   });

//   try {
//     const savedPost = await post.save(); // promise
//     res.json(savedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// find request id and send it back
router.get('/:postId', async (req, res) => {
  // postId -> objectID in database
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete database data requested and send the delete report back
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// update database data (key) requested and send the update report back
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } }); // key
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
