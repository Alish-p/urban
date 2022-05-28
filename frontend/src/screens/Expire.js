import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchExpires } from "../redux/slices/Registrations";
import { useEffect } from "react";
import moment from "moment";

const ExpireScreen = () => {
  const dispatch = useDispatch();

  //   const error = useSelector((state) => state.registration.error);
  //   const loading = useSelector((state) => state.registration.loading);
  //   const expired = useSelector((state) => state.registration.expired);
  const expires = useSelector((state) => state.registration.expires);

  useEffect(() => {
    dispatch(fetchExpires());
  }, []);

  const createText = (name, expireDate) =>
    `Hi+${name}%2C%0D%0AThank+you+for+being+a+part+of+our+UrbanRead+community.%0D%0AWe+hope+you%E2%80%99ve+been+able+to+enjoy+all+the+benefits+of+your+membership.%0D%0A%0D%0AYour+membership+is+expiring+on+${expireDate}.%0D%0APlease+renew+your+membership+to+continue+using+the+benefits.%0D%0AWe%E2%80%99re+excited+to+have+you+back%21%0D%0A%0D%0ABest%2C%0D%0AUrbanRead%0D%0A`;

  return (
    <Container>
      <Row>
        <h1 className="p-0 my-5">Expires in a Week</h1>

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
                      href={`http://wa.me/91${mobileNumber}?text=${createText(
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
