var express = require('express');
const { burger: Burger, review: Review } = require('../models');
var router = express.Router();

router.get('/', async (req, res, next) => {
  const burgers = await Burger.findAll();

  res.render('index', { burgers });
});

router.get('/contact', (req, res, next) => {
  res.render('contact');
});

router.get('/about', async (req, res, next) => {
  const reviews = await Review.findAll();

  res.render('about', { reviews });
});

module.exports = router;
