import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchExpires } from "../redux/slices/Registrations";
import { useEffect } from "react";
import moment from "moment";

const ExpireScreen = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  //   const error = useSelector((state) => state.registration.error);
  //   const loading = useSelector((state) => state.registration.loading);
  //   const expired = useSelector((state) => state.registration.expired);
  const expires = useSelector((state) => state.registration.expires);

  useEffect(() => {
    dispatch(fetchExpires());
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="p-0 my-5">Expires in a Week</h1>

        <Table striped borderless hover variant="light" size="sm">
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
            {expires.map((registration, i) => (
              <>
                <tr>
                  <td>{i}</td>
                  <td>{registration._id}</td>
                  <td>{registration.student.name}</td>
                  <td>{registration.student.mobileNumber}</td>
                  <td>
                    {moment(registration.endDate).zone(0).format("MMM D, YYYY")}
                  </td>
                  <td>{registration.seatNumber}</td>
                  <td>
                    <a
                      href={`http://wa.me/91${
                        registration.student.mobileNumber
                      }?text=Hi%20,Please%20Note%20that%20your%20membership%20expires%20on%20${moment(
                        registration.endDate
                      ).format("MMMM d, YY")}`}
                      type="button"
                      class="btn btn-outline-primary btn-sm p-0 px-3"
                      target={"_blank"}
                    >
                      Notify
                    </a>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default ExpireScreen;
