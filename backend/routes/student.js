const express = require("express");
const router = express.Router();
const {
  fetchStudents,
  newRegistration,
  fetchAvailableSeats,
  fetchStudentByNumber,
  fetchExpires,
  newHalfRegistration,
  fetchHalfDayRegistrations,
} = require("../controllers/student");
const { private } = require("../middlewares/Auth");

router.post("/", private, newRegistration);
router.post("/half-day", newHalfRegistration);
router.get("/half-day", fetchHalfDayRegistrations);
router.get("/", fetchStudents);
router.get("/seats", private, fetchAvailableSeats);
router.get("/expires", private, fetchExpires);
router.get("/:mobile", private, fetchStudentByNumber);

module.exports = router;
