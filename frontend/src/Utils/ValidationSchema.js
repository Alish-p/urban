import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name should have 3 to 50 characters")
    .max(50, "Name should have 3 to 50 characters")
    .required("Name is Required"),
  gender: Yup.string().required("Gender is Required"),
  mobileNumber: Yup.string().matches(
    /^\d{10}$/,
    "Mobile Number should have 10 digits"
  ),
  age: Yup.number()
    .min(10, "Please enter valid Age")
    .max(100, "Please enter Valid Age"),

  city: Yup.string()
    .min(3, "Address should have 3 to 20 characters")
    .max(50, "Address should have 3 to 50 characters"),

  exam: Yup.string()
    .min(2, "Exam should have 2 to 20 characters")
    .max(20, "Exam should have 2 to 20 characters"),

  fees: Yup.number()
    .min(500, "Please enter valid Fees")
    .max(15000, "Please enter Valid Fees"),

  seatNumber: Yup.number()
    .min(1, "Please enter valid Seat Number")
    .max(150, "Please enter Valid Seat Number"),

  duration: Yup.number()
    .min(1, "Please enter valid Duration Months")
    .max(12, "Please enter Valid Duration Months"),
});
export const WaitingSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name should have 3 to 50 characters")
    .max(50, "Name should have 3 to 50 characters")
    .required("Name is Required"),
  gender: Yup.string().required("Gender is Required"),
  mobileNumber: Yup.string().matches(
    /^\d{10}$/,
    "Mobile Number should have 10 digits"
  ),
  duration: Yup.number()
    .min(1, "Please enter valid Duration Months")
    .max(12, "Please enter Valid Duration Months"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is Required")
    .email("Please Provide valid Email Address"),
  password: Yup.string()
    .min(5, "Password should have 5 to 10 characters")
    .max(10, "Password should have 5 to 10 characters")
    .required("Password is Required"),
});

export const SearchSchema = Yup.object().shape({
  mobileNumber: Yup.string().matches(
    /^\d{10}$/,
    "Mobile Number should have 10 digits"
  ),
});
