const express = require("express");
const router = express.Router();
const {
  book,
  fetchBookings,
  deleteBooking,
} = require("../controllers/waiting");
const { private } = require("../middlewares/Auth");

router.post("/", book);
router.get("/", fetchBookings);
router.delete("/:id", deleteBooking);

module.exports = router;
