import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchExpires } from "../redux/slices/Registrations";
import { useEffect } from "react";
import moment from "moment";
import { renewMessage } from "../Utils/CreateText";

const ExpireScreen = () => {
  const dispatch = useDispatch();

  //   const error = useSelector((state) => state.registration.error);
  //   const loading = useSelector((state) => state.registration.loading);
  const expired = useSelector((state) => state.registration.expired);
  const expires = useSelector((state) => state.registration.expires);

  useEffect(() => {
    dispatch(fetchExpires());
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="p-0 my-5 text-center">Expires in a Week</h1>

        <Table striped borderless hover variant="light" size="sm" responsive>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>RI#</th>
              <th>Name</th>
              <th>Number</th>
              <th>End Date</th>
              <th>Seat</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expires.map((registration, i) => {
              let { _id, seatNumber, endDate } = registration || {};
              const { name, mobileNumber } = registration.student || {};

              endDate = moment(endDate).zone(0).format("MMM D, YY");

              return (
                <tr key={_id}>
                  <td>{i}</td>
                  <td>{_id}</td>
                  <td>{name}</td>
                  <td>{mobileNumber}</td>
                  <td>{endDate}</td>
                  <td>{seatNumber}</td>
                  <td>
                    <a
                      href={`http://wa.me/91${mobileNumber}?text=${renewMessage(
                        name,
                        endDate
                      )}`}
                      type="button"
                      className="btn btn-outline-primary btn-sm p-0 px-3"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Notify
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <h1 className="p-0 my-5 text-center">Expired Last Week</h1>

        <Table striped borderless hover variant="light" size="sm" responsive>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>RI#</th>
              <th>Name</th>
              <th>Number</th>
              <th>End Date</th>
              <th>Seat</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expired.map((registration, i) => {
              let { _id, seatNumber, endDate } = registration || {};
              const { name, mobileNumber } = registration.student || {};

              endDate = moment(endDate).zone(0).format("MMM D, YY");

              return (
                <tr key={_id}>
                  <td>{i}</td>
                  <td>{_id}</td>
                  <td>{name}</td>
                  <td>{mobileNumber}</td>
                  <td>{endDate}</td>
                  <td>{seatNumber}</td>
                  <td>
                    <a
                      href={`http://wa.me/91${mobileNumber}?text=${renewMessage(
                        name,
                        endDate
                      )}`}
                      type="button"
                      className="btn btn-outline-primary btn-sm p-0 px-3"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Notify
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default ExpireScreen;
