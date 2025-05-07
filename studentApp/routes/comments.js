const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment'); // Mongoose model

// GET /comments - fetch and render latest makeup-related comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().limit(3).sort({ date: -1 });
    res.render('comments', { comments });
  } catch (err) {
    res.status(500).send('Error retrieving comments: ' + err);
  }
});

// Optional: seed route to insert initial makeup-related comments (run once)
router.get('/seed', async (req, res) => {
  try {
    await Comment.deleteMany(); // clears old entries if needed
    await Comment.insertMany([
      {
        name: 'Jade Lin',
        email: 'jade@beautybox.com',
        movie_id: '000000000000000000000001',
        text: 'The blush palette is stunning! It blends like a dream and lasts all day.',
        date: new Date('2024-11-12')
      },
      {
        name: 'Carlos Rivera',
        email: 'carlosr@makeuplab.io',
        movie_id: '000000000000000000000002',
        text: 'Loved the foundation! Lightweight and gave me a flawless finish.',
        date: new Date('2025-01-08')
      },
      {
        name: 'Maya Bloom',
        email: 'maya@glowup.co',
        movie_id: '000000000000000000000003',
        text: 'I’m obsessed with the highlighter. It gives the perfect shimmer!',
        date: new Date('2025-02-17')
      }
    ]);
    res.send('✅ Seeded makeup comments into database!');
  } catch (err) {
    res.status(500).send('❌ Error seeding data: ' + err);
  }
});
router.get('/new', (req, res) => {
  res.send('<h1>Review Form Coming Soon!</h1>');
});

module.exports = router;
