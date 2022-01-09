const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser)
// .delete(deleteStudent);

// /api/students/:studentId
// router.route('/:studentId').get(getSingleUser).delete(deleteStudent);


module.exports = router;
