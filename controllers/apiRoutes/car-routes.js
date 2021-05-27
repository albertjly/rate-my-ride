const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Car, User, Comment, } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Car.findAll({
    attributes: ['id', 'image_url', 'make', 'model', 'year', 'color', 'description', 'user_id', 'created_at' ],
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
    .then(dbCarData => res.json(dbCarData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Car.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'image_url', 'make', 'model', 'year', 'color', 'description', 'user_id', 'created_at' ],
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
      if (!dbCarData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbCarData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Car.create({
    image_url: req.body.image_url,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    description: req.body.description,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Car.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCarData => {
      if (!dbCarData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbCarData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Car.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCarData => {
      if (!dbCarData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbCarData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
