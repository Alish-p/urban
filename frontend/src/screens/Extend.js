import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Formik, Field } from "formik";
import { ExtendSchema } from "../Utils/ValidationSchema";
import { Link, useNavigate } from "react-router-dom";
import { extend, unset } from "../redux/slices/Student";
import Message from "../components/Message";
import Loader from "../components/Loader";
import TextField from "../Utils/FormComponents/TextField";
import FormContainer from "../components/FormContainer";
import { useEffect } from "react";
import moment from "moment";

const ExtendScreen = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.student.error);
  const loading = useSelector((state) => state.student.loading);

  const registered = useSelector((state) => state.student.registered);
  const registration = useSelector((state) => state.student.registration);

  const initialvalues = {
    id: "",
    days: "",
    fees: "",
  };

  useEffect(() => {
    dispatch(unset());
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(extend(values));
    setSubmitting(false);
  };

  const endDate = moment(registration.endDate).zone(0).format("MMM D, YY");

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      <FormContainer>
        <h2 className="my-3 text-center">Extend Membership</h2>
        {error && <Message variant="danger">{error}</Message>}
        {registered && (
          <Message variant="success">{`The Membership Extended till ${endDate}`}</Message>
        )}
        {loading && <Loader size="sm" />}
        <Formik
          initialValues={initialvalues}
          onSubmit={handleSubmit}
          validationSchema={ExtendSchema}
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
                name="days"
                component={TextField}
                label="Days"
                placeholder="Days to Extend"
              />
              <Field
                type="number"
                name="fees"
                component={TextField}
                label="Fees"
                placeholder="Renew Fees"
              />

              <Button type="submit" disabled={isSubmitting}>
                Renew
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};

export default ExtendScreen;
