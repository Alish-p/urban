import React, { useRef } from "react";
import "./success.css";
import moment from "moment";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useReactToPrint } from "react-to-print";

function Success() {
  const { registration, student } = useSelector(
    (state) => state.student.registration
  );

  const componentRef = useRef();

  let { startDate, endDate, seatNumber, fees, _id: rId } = registration || {};
  let { name, mobileNumber, city } = student || {};

  startDate = moment(startDate).zone(0).format("MMM D, YY");
  endDate = moment(endDate).zone(0).format("MMM D, YY");

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${name}-${seatNumber}-${startDate.slice(0, 3)}`,
  });

  return (
    <div className="container">
      <div className="page-content container">
        <div className="page-header text-blue-d2">
          <h2 className="page-title text-secondary-d1">Invoice</h2>

          <div className="page-tools">
            <div className="action-buttons">
              <button
                className="btn bg-white btn-light mx-1px text-95"
                data-title="Download"
                onClick={handlePrint}
              >
                <i className="mr-1 fa mr-2 fa-print text-primary-m1 text-120 w-2"></i>{" "}
                Download
              </button>

              <a
                className="btn bg-white btn-light mx-1px text-95"
                href={`http://wa.me/91${mobileNumber}`}
                data-title="PDF"
                target={"_blank"}
              >
                <i className="mr-1 fa-brands fa-whatsapp text-success text-120 w-2"></i>{" "}
                Whatsapp
              </a>
            </div>
          </div>
        </div>

        <div className="my-5 print-source" ref={componentRef}>
          <div className="row">
            <div className="col d-flex justify-content-center">
              UrbanRead Library
            </div>
          </div>
          <div className="row my-5">
            {/* <!-- To Section --> */}
            <div className="col">
              <div className="row text-primary my-3">To-</div>
              <div className="row">{name}</div>
              <div className="row">{city}</div>
              <div className="row">
                <span className="p-0">
                  <i className="fa-solid fa-phone text-secondary fs-6"></i> +91
                  {mobileNumber}
                </span>
              </div>
            </div>

            {/* <!-- Invoice Section --> */}
            <div className="col">
              <div className="row text-primary my-3">Invoice</div>
              <div className="row  d-inline-block">
                ID: <span className="text-muted">#{rId}</span>
              </div>
              <br />
              <div className="row d-inline">
                Issue Date: <span className="text-muted">{startDate}</span>
              </div>
              <br />
              <div className="row d-inline">
                <span className="p-0">
                  Status : &nbsp; <span className="text-muted">Paid</span>{" "}
                  <i className="fa-solid fa-check text-success"></i>
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Table --> */}
          <div className="row table-responsive">
            <table className="table align-middle mb-5 bg-light borderless">
              <thead className="thead">
                <tr className="table-head">
                  <th>#</th>
                  <th>Name</th>
                  <th>Seat</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-muted mb-0">1</p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1">{name}</p>
                    {/* <p className="text-muted mb-0"></p> */}
                  </td>
                  <td>
                    <p className="text-muted mb-0">{seatNumber}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{startDate}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{endDate}</p>
                  </td>
                </tr>
                <tr className="second-last-row">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr className="last-row">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="highlighted-cell">Total Amount</td>
                  <td>₹ {fees} </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <!-- TNC --> */}
          <div className="row">
            <h6 className="fs-6">Term and Conditions :</h6>
            <p className="text-muted small">
              All amount paid is non-refundable and seat allocated is
              non-transferable.
            </p>
          </div>

          <hr />

          {/* <!-- Footer --> */}
          <div className="row justify-content-center">
            <div className="col">
              <p className="small text-muted text-center">
                +91 75750 49646 | 3RD Floor New Bus Stand, Palanpur |
                urbanread.gmail.com
              </p>
            </div>
          </div>
        </div>

        <div>
          <LinkContainer to={"/"}>
            <button className="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0">
              Home
            </button>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
}

export default Success;
