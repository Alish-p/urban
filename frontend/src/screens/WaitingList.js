import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Table, Button } from "react-bootstrap";
import { fetchWaitings, deleteWaitings } from "../redux/slices/Waiting";
import { useEffect } from "react";
import Message from "../components/Message";
import Loader from "../components/Loader";

const WaitingList = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.waiting.error);
  const loading = useSelector((state) => state.waiting.loading);
  const students = useSelector((state) => state.waiting.students);

  useEffect(() => {
    dispatch(fetchWaitings());
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="p-0 my-5 text-center">All Bookings</h1>

        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader size="sm" />}

        <Table striped borderless hover variant="light" size="sm" responsive>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Number</th>
              <th>Duration</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {students.map(
              ({ _id, name, gender, mobileNumber, duration }, i) => {
                return (
                  <tr key={_id}>
                    <td>{i + 1}</td>
                    <td>{name}</td>
                    <td>{gender}</td>
                    <td>{mobileNumber}</td>
                    <td>{duration}</td>
                    <td>
                      <Button
                        className="btn btn-outline-primary btn-sm p-0 px-3 btn-light"
                        onClick={() => {
                          dispatch(deleteWaitings(_id));
                        }}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default WaitingList;
