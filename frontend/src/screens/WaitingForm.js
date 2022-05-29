import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Formik, Field } from "formik";
import { WaitingSchema } from "../Utils/ValidationSchema";
import { useNavigate } from "react-router-dom";
import TextField from "../Utils/FormComponents/TextField";
import RadioField from "../Utils/FormComponents/RadioButton";
import FormContainer from "../components/FormContainer";
import { useEffect } from "react";
import { unset, book } from "../redux/slices/Waiting";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";

const WaitingForm = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const error = useSelector((state) => state.waiting.error);
  const loading = useSelector((state) => state.waiting.loading);

  const registered = useSelector((state) => state.waiting.registered);

  useEffect(() => {
    if (registered) {
      Navigate("/waiting-list");
    }
    return () => {
      dispatch(unset());
    };
  }, [registered]);

  const initialValues = {
    name: "",
    gender: "",
    mobileNumber: 0,
    duration: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    dispatch(book(values));
    setSubmitting(false);
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h2 className="my-3 text-center"> Pre Booking</h2>
        {loading && <Loader size="sm" />}

        <Formik
          onSubmit={handleSubmit}
          validationSchema={WaitingSchema}
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
                name="duration"
                component={TextField}
                label="Duration (Months)"
              />

              {error && <Message variant="danger">{error}</Message>}

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

export default WaitingForm;
