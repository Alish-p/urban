import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Formik, Field } from "formik";
import { ChangeSeatSchema } from "../Utils/ValidationSchema";
import { Link } from "react-router-dom";
import { changeSeat, unset } from "../redux/slices/Student";
import Message from "../components/Message";
import Loader from "../components/Loader";
import TextField from "../Utils/FormComponents/TextField";
import FormContainer from "../components/FormContainer";
import { useEffect } from "react";

const ChangeSeatScreen = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.student.error);
  const loading = useSelector((state) => state.student.loading);

  const registered = useSelector((state) => state.student.registered);
  const registration = useSelector((state) => state.student.registration);

  const initialvalues = {
    id: "",
    seatNumber: "",
  };

  useEffect(() => {
    dispatch(unset());
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(changeSeat(values));
    setSubmitting(false);
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      <FormContainer>
        <h2 className="my-3 text-center">Change Seat</h2>
        {error && <Message variant="danger">{error}</Message>}
        {registered && (
          <Message variant="success">{`The Seat Changed to ${registration.seatNumber}`}</Message>
        )}
        {loading && <Loader size="sm" />}
        <Formik
          initialValues={initialvalues}
          onSubmit={handleSubmit}
          validationSchema={ChangeSeatSchema}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                type="text"
                name="id"
                component={TextField}
                label="ID"
                placeholder="... RI-01"
              />
              <Field
                type="number"
                name="seatNumber"
                component={TextField}
                label="Seat Number"
                placeholder="Please Enter Seat Number"
              />
              <Button type="submit" disabled={isSubmitting}>
                Change Seat
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};

export default ChangeSeatScreen;
