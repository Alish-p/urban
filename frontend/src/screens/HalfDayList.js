import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Table, Button } from "react-bootstrap";
import { fetchHalfDayRegistrations } from "../redux/slices/Student";
import { useEffect } from "react";
import Message from "../components/Message";
import Loader from "../components/Loader";
import moment from "moment";

const HalfDayList = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.student.error);
  const loading = useSelector((state) => state.student.loading);
  const students = useSelector((state) => state.student.halfDayRegistrations);

  useEffect(() => {
    dispatch(fetchHalfDayRegistrations());
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="p-0 my-5 text-center">Half Day List</h1>

        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader size="sm" />}

        <Table striped borderless hover variant="light" size="sm" responsive>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Shift</th>
              <th>Mobile</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {students.map(({ _id, student, shift, startDate, endDate }, i) => {
              return (
                <tr key={_id}>
                  <td>{i + 1}</td>
                  <td>{student.name}</td>
                  <td style={{ textTransform: "capitalize" }}>{shift}</td>
                  <td>{student.mobileNumber}</td>
                  <td>{moment(startDate).zone(0).format("MMM D, YY")}</td>
                  <td>{moment(endDate).zone(0).format("MMM D, YY")}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default HalfDayList;
