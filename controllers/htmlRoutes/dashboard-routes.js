const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Car, User, Comment, } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Car.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: ['id', 'make', 'model', 'year', 'color', 'description', 'user_id', 'created_at'],
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
      const car = dbCarData.map(car => car.get({ plain: true }));
      res.render('dashboard', { cars, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Car.findByPk(req.params.id, {
    attributes: [ 'id', 'make', 'model', 'year', 'color', 'description', 'user_id', 'created_at' ],
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
      if (dbCarData) {
        const post = dbCarData.get({ plain: true });
        
        res.render('edit-car', {
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