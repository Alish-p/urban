const express = require('express');
const router = express.Router();
const {
  fetchStudents,
  newRegistration,
  fetchAvailableSeats,
} = require('../controllers/student');
const { private } = require('../middlewares/Auth');

router.post('/', private, newRegistration);
router.get('/', private, fetchStudents);

router.get('/available', private, fetchAvailableSeats);

module.exports = router;
