import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Formik, Field } from "formik";
import { SearchSchema } from "../Utils/ValidationSchema";
import { useNavigate } from "react-router-dom";
import { fetchStudent, unset } from "../redux/slices/Student";
import Message from "../components/Message";
import Loader from "../components/Loader";
import TextField from "../Utils/FormComponents/TextField";
import FormContainer from "../components/FormContainer";
import { useEffect } from "react";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const error = useSelector((state) => state.student.error);
  const loading = useSelector((state) => state.student.loading);
  const studentExist = useSelector((state) => state.student.registered);

  useEffect(() => {
    if (studentExist) {
      Navigate(`/success`);
    }
    return () => {
      dispatch(unset());
    };
  }, [studentExist]);

  const initialvalues = {
    mobileNumber: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    dispatch(fetchStudent(values));
    setSubmitting(false);
  };

  return (
    <FormContainer>
      <h2 className="my-3 text-center">Search Student</h2>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader size="sm" />}
      <Formik
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={SearchSchema}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              type="tel"
              name="mobileNumber"
              component={TextField}
              label="Mobile Number"
              placeholder="Ex. 99887 45644"
            />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default SearchScreen;
