import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Formik, Field } from "formik";
import { RegistrationSchema } from "../Utils/ValidationSchema";
import { useNavigate } from "react-router-dom";
import TextField from "../Utils/FormComponents/TextField";
import RadioField from "../Utils/FormComponents/RadioButton";
import FormContainer from "../components/FormContainer";
import { useEffect } from "react";
import { register, unset } from "../redux/slices/Student";
import { Link } from "react-router-dom";
import Message from "./Message";
import Loader from "./Loader";

const Register = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const error = useSelector((state) => state.student.error);
  const loading = useSelector((state) => state.student.loading);

  const registered = useSelector((state) => state.student.registered);

  useEffect(() => {
    if (registered) {
      Navigate("/success");
    }
    return () => {
      dispatch(unset());
    };
  }, [registered]);

  const initialValues = {
    name: "",
    gender: "",
    mobileNumber: 0,
    fees: "",
    city: "",
    age: "",
    exam: "",
    seatNumber: "",
    duration: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    dispatch(register(values));
    setSubmitting(false);
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h2 className="my-3 text-center"> New Registration</h2>

        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader size="sm" />}
        <Formik
          onSubmit={handleSubmit}
          validationSchema={RegistrationSchema}
          initialValues={initialValues}
        >
          {({ isSubmitting, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                type="text"
                name="name"
                component={TextField}
                label="Name"
              />

              <Field
                name="gender"
                component={RadioField}
                label="Gender"
                handleChange={handleChange}
                options={[
                  { label: "Female", value: "F" },
                  { label: "Male", value: "M" },
                ]}
              />

              <Field
                type="tel"
                name="mobileNumber"
                component={TextField}
                label="Mobile Number"
              />

              <Field
                type="number"
                name="age"
                component={TextField}
                label="Age"
              />

              <Field
                type="number"
                name="fees"
                component={TextField}
                label="Price"
                onWheel={(e) => e.target.blur()}
              />

              <Field
                type="number"
                name="seatNumber"
                component={TextField}
                label="Seat Number"
              />

              <Field
                type="number"
                name="duration"
                component={TextField}
                label="Duration (Months)"
              />

              <Field
                type="text"
                name="city"
                component={TextField}
                label="Address"
              />

              <Field
                type="text"
                name="exam"
                component={TextField}
                label="Exam"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-block"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};

export default Register;
