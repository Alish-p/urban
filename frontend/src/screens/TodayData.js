import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Table } from "react-bootstrap";
import { fetchTodaysData } from "../redux/slices/Registrations";
import { useEffect } from "react";
import moment from "moment";
import Message from "../components/Message";
import Loader from "../components/Loader";

const TodayDataScreen = () => {
  const dispatch = useDispatch();

  const todaysRegistration = useSelector(
    (state) => state.registration.todaysRegistration
  );
  const todaysRenew = useSelector((state) => state.registration.todaysRenew);
  const loading = useSelector((state) => state.registration.loading);
  const error = useSelector((state) => state.registration.error);

  useEffect(() => {
    dispatch(fetchTodaysData());
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="p-0 my-5 text-center">Registrations</h1>

        {error && <Message variant="danger">{error}</Message>}
        {loading ? (
          <Loader size="sm" />
        ) : (
          <>
            <Table
              striped
              borderless
              hover
              variant="light"
              size="sm"
              responsive
            >
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>RI#</th>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Seat</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                {todaysRegistration.map((registration, i) => {
                  let { _id, seatNumber, endDate, fees } = registration || {};
                  const { name, mobileNumber } = registration.student || {};

                  endDate = moment(endDate).zone(0).format("MMM D, YY");

                  return (
                    <tr key={_id}>
                      <td>{i}</td>
                      <td>{_id}</td>
                      <td>{name}</td>
                      <td>{mobileNumber}</td>
                      <td>{seatNumber}</td>
                      <td>{fees}</td>
                    </tr>
                  );
                })}

                <tr>
                  <td colSpan={6}></td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                  <td>
                    <h5>Total</h5>
                  </td>
                  <td>
                    <h5>
                      {todaysRegistration.reduce((acc, cv) => cv.fees + acc, 0)}
                    </h5>
                  </td>
                </tr>
              </tbody>
            </Table>
          </>
        )}
      </Row>
      <Row>
        <h1 className="p-0 my-5 text-center">Renews </h1>

        {error && <Message variant="danger">{error}</Message>}
        {loading ? (
          <Loader size="sm" />
        ) : (
          <>
            <Table
              striped
              borderless
              hover
              variant="light"
              size="sm"
              responsive
            >
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>RI#</th>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Seat</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                {todaysRenew.map((registration, i) => {
                  let { _id, seatNumber, renewFees } = registration || {};
                  const { name, mobileNumber } = registration.student || {};

                  return (
                    <tr key={_id}>
                      <td>{i}</td>
                      <td>{_id}</td>
                      <td>{name}</td>
                      <td>{mobileNumber}</td>
                      <td>{seatNumber}</td>
                      <td>{renewFees}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={6}></td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                  <td>
                    <h5>Total</h5>
                  </td>
                  <td>
                    <h5>
                      {todaysRenew.reduce((acc, cv) => cv.renewFees + acc, 0)}
                    </h5>
                  </td>
                </tr>
              </tbody>
            </Table>
          </>
        )}
      </Row>
    </Container>
  );
};

export default TodayDataScreen;
