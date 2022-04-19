var express = require('express');
const { feedback: Feedback } = require('../models');
var router = express.Router();

router.post('/feedback', async (req, res, next) => {
  const { message, name, email, subject } = req.body;

  Feedback.create({ message, name, email, subject })
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
