const router = require('express').Router();

const userRoutes = require('./user-routes.js.js.js');
const carRoutes = require('./car-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/cars', carRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
