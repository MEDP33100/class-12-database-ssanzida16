const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// ✅ Route to test if comments route is working
router.get('/test', (req, res) => {
  res.send('✅ Comments route works!');
});

// ✅ Main route to get comments
router.get('/', async (req, res) => {
    try {
      const comments = await Comment.find().limit(10);
      res.render('comments', { comments });
    } catch (err) {
      res.status(500).send('Error retrieving comments: ' + err);
    }
  });
  
  

module.exports = router;
