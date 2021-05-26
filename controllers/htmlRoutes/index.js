const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes.js.js');
const homeRoutes = require('./home-routes');

router.use('/dashboard', dashboardRoutes);
router.use('/home', homeRoutes);

module.exports = router;