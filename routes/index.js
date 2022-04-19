var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/menu', (req, res, next) => {
  res.render('menu');
});

router.get('/contact', (req, res, next) => {
  res.render('contact');
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

module.exports = router;
