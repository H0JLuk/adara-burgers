const express = require('express');
const { feedback: Feedback, burger: Burger } = require('../models');
const router = express.Router();

router.post('/feedback', async (req, res, next) => {
  const { message, name, email, subject } = req.body;

  try {
    await Feedback.create({ message, name, email, subject });
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/burger', async (req, res) => {
  const { title, description, price, image } = req.body;
  try {
    await Burger.create({ title, description, price, image });
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.put('/burger/:id', async (req, res) => {
  const { title, description, price, image } = req.body;

  try {
    await Burger.update(
      {
        title,
        description,
        price,
        image,
      },
      {
        where: {
          _id: id,
        },
      },
    );
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.delete('/burger/:id', async (req, res) => {
  try {
    await Burger.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

module.exports = router;
