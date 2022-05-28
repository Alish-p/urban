const asyncHandler = require("express-async-handler");
const StudentModel = require("../model/Student");
const RegistrationModel = require("../model/Registration");

const newRegistration = asyncHandler(async (req, res) => {
  console.log("student registered");

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

  seats = seats.map((i) => i["seatNumber"]);

  if (seats.includes(seatNumber)) {
    const err = new Error("Seat is not available.");
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
    student: student._id,
  }).save();

  res.status(201).json({ registration, student });
});

const fetchStudents = asyncHandler(async (req, res) => {
  const students = await StudentModel.find();
  res.status(200).json({ students });
});

// Need Work
const fetchExpires = asyncHandler(async (req, res) => {
  let today = new Date();
  let numberOfDaysToAdd = 6;
  let end = today.setDate(today.getDate() + 6);
  let start = today.setDate(today.getDate() - 6);

  console.log(start);
  console.log(end);

  const expires = await RegistrationModel.find({
    endDate: { $gte: today, $lt: end },
  }).populate("student");

  const expired = await RegistrationModel.find({
    endDate: { $gte: start, $lt: today },
  });

  res.status(200).json({ expires, expired });
});

const fetchStudentByNumber = asyncHandler(async (req, res) => {
  const mobileNumber = req.params.mobile;
  let registration;
  const student = await StudentModel.findOne({ mobileNumber }).sort({
    $natural: -1,
  });

  if (student) {
    registration = await RegistrationModel.findOne({
      studentID: student.studentID,
    }).sort({
      $natural: -1,
    });
  } else {
    throw new Error("No Student exist");
  }
  if (!student) throw new Error("No Student exist");
  if (!registration) throw new Error("No Registration found");

  res.status(200).json({ registration, student });
});

const fetchAvailableSeats = asyncHandler(async (req, res) => {
  const registrations = await RegistrationModel.find(
    {
      endDate: { $gte: new Date() },
    },
    { seatNumber: 1, _id: 0 }
  ).populate("student", "gender");

  console.log(registrations);

  const total = [...Array(151).keys()];

  // to remove 0th seat
  total.shift();

  const filled = registrations.map((i) => ({
    seatNo: i.seatNumber,
    gender: i.student.gender,
    available: false,
  }));

  const filledarr = registrations.map((i) => i["seatNumber"]);
  console.log(filledarr);

  console.log(filled);

  for (let i = 1; i <= 150; i++) {
    if (!filledarr.includes(i)) {
      filled.push({ seatNo: i, available: true });
    }
  }

  console.log("xxx");
  console.log(filled);

  filled.sort((a, b) => a.seatNo - b.seatNo);

  res.status(200).send(filled);
});

module.exports = {
  newRegistration,
  fetchStudents,
  fetchAvailableSeats,
  fetchStudentByNumber,
  fetchExpires,
};
