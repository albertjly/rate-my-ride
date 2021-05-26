const router = require('express').Router();
const sequelize = require('../config/connection');
const { Car, User, Comment, } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Car.findAll({
    attributes: ['id', 'make', 'model', 'year', 'color', 'description', 'user_id', 'created_at' ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbCarData => {
      const cars = dbCarData.map(car => car.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/car/:id', (req, res) => {
  Car.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'make', 'model', 'year', 'color', 'description', 'user_id', 'created_at' ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbCarData => {
      if (!dbCarData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbCarData.get({ plain: true });

      res.render('single-car', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
