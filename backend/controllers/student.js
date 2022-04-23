const asyncHandler = require('express-async-handler');
const StudentModel = require('../model/Student');
const RegistrationModel = require('../model/Registration');

const newRegistration = asyncHandler(async (req, res) => {
  console.log('student registered');

  const {
    name,
    gender,
    age,
    mobileNumber,
    city,
    exam,
    seatNumber,
    fees,
    duration,
  } = req.body;

  let seats = await RegistrationModel.find(
    {
      endDate: { $gte: Date.now() },
    },
    { seatNumber: 1, _id: 0 }
  );

  seats = seats.map((i) => i['seatNumber']);

  if (seats.includes(seatNumber)) {
    const err = new Error('Seat is not available.');
    err.status = 400;
    throw err;
  }

  const student = await new StudentModel({
    name,
    gender,
    age,
    mobileNumber,
    city,
    exam,
  }).save();

  const registration = await new RegistrationModel({
    seatNumber,
    fees,
    duration,
    studentID: student._id,
  }).save();

  res.status(201).json({ registration, student });
});

const fetchStudents = asyncHandler(async (req, res) => {
  const students = await StudentModel.find();
  res.status(200).json({ students });
});

const fetchAvailableSeats = asyncHandler(async (req, res) => {
  const registrations = await RegistrationModel.find(
    {
      endDate: { $gte: new Date() },
    },
    { seatNumber: 1, _id: 0 }
  );

  const seats = [...Array(150).keys()];

  const filled = registrations.map((i) => i['seatNumber']);

  const available = seats.filter((i) => !filled.includes(i) & (i !== 0));

  res.status(200).send(available);
});

module.exports = { newRegistration, fetchStudents, fetchAvailableSeats };
