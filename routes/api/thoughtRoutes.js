const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateCourse,
  deleteCourse,
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought)

// /api/courses/:courseId

module.exports = router;
