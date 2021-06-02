const router = require('express').Router();
const sequelize = require('../../config/connection');


router.get('/', (req, res) => {
  res.render('new-post', {
    currentMenu: 'post',
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;