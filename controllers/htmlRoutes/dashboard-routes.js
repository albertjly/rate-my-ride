const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Car, User, Comment, } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts for dashboard
router.get('/', (req, res) => {
  console.log(req.session);
  console.log('======================');
  Car.findAll({
    attributes: ['id', 'make', 'model', 'year', 'color', 'description', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'car_id', 'user_id', 'created_at'],
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
      const car = dbCarData.map(car => car.get({ plain: true }));
      res.render('dashboard');
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
  Car.findByPk(req.params.id, {
    attributes: ['id', 'make', 'model', 'year', 'color', 'description', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'car_id', 'user_id', 'created_at'],
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
      if (dbCarData) {
        const car = dbCarData.get({ plain: true });

        res.render('edit-post', {
          car,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
