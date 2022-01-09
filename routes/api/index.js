const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');
const userController = require('../../controllers/userController');

const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
