import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchAllStudents } from "../redux/slices/Student";
import { useEffect } from "react";
import moment from "moment";
import Message from "../components/Message";
import Loader from "../components/Loader";

const StudentsList = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.student.error);
  const loading = useSelector((state) => state.student.loading);
  const students = useSelector((state) => state.student.students);

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="p-0 my-5 text-center">Full Day List</h1>

        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader size="sm" />}

        <Table striped borderless hover variant="light" size="sm" responsive>
          <thead className="thead-dark">
            <tr>
              <th>#Seat</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Number</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {students.map((registration) => {
              let { seatNumber, startDate, endDate } = registration || {};
              const { _id, name, mobileNumber, gender } =
                registration.student || {};

              endDate = moment(endDate).zone(0).format("MMM D, YY");
              startDate = moment(startDate).zone(0).format("MMM D, YY");

              return (
                <tr key={_id}>
                  <td>{seatNumber}</td>
                  <td>{name}</td>
                  <td>{gender}</td>
                  <td>{mobileNumber}</td>
                  <td>{startDate}</td>
                  <td>{endDate}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default StudentsList;
