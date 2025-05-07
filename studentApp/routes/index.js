
const Test = require('../models/Test');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const test = await Test.create({ message: 'MongoDB is working!' });
  res.render('index', { title: 'Express' });
});

module.exports = router;
