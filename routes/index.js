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

router.get('/admin', async (req, res, next) => {
  const burgers = await Burger.findAll();

  res.render('admin', { burgers });
});

router.get('/admin/burger', async (req, res, next) => {
  const { id, mode } = req.query;

  if (mode === 'edit') {
    try {
      const burger = await Burger.findByPk(id);
      if (!burger) throw 0;
      res.render('admin-burger', {
        burger,
        mode,
        formUrl: `/api/burger/${id}`,
      });
    } catch {
      res.redirect('/admin');
    }
  }
  res.render('admin-burger', {
    burger: {},
    mode: 'create',
    formUrl: '/api/burger',
  });
});

module.exports = router;
