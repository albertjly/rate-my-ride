const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Car, Comment } = require('../../models');

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;