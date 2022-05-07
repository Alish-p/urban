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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  let { startDate, endDate, seatNumber, fees, _id: rId } = registration || {};
  let { name, mobileNumber, city } = student || {};

  console.log({ startDate, endDate });
  startDate = moment(startDate).zone(0).format("MMM D, YY");
  endDate = moment(endDate).zone(0).format("MMM D, YY");
  console.log({ startDate, endDate });

  return (
    <div>
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

        <div class="my-5 print-source" ref={componentRef}>
          <div class="row">
            <div class="col d-flex justify-content-center">
              UrbanRead Library
            </div>
          </div>
          <div class="row my-5">
            {/* <!-- To Section --> */}
            <div class="col">
              <div class="row text-primary my-3">To-</div>
              <div class="row">{name}</div>
              <div class="row">29-A Sukun Society</div>
              <div class="row">Palanpur</div>
              <div class="row">
                <span class="p-0">
                  <i class="fa-solid fa-phone text-secondary fs-6"></i> +91
                  {mobileNumber}
                </span>
              </div>
            </div>

            {/* <!-- Invoice Section --> */}
            <div class="col">
              <div class="row text-primary my-3">Invoice</div>
              <div class="row  d-inline-block">
                ID: <span className="text-muted">#{rId}</span>
              </div>
              <br />
              <div class="row d-inline">
                Issue Date: <span className="text-muted">{startDate}</span>
              </div>
              <br />
              <div class="row d-inline">
                <span class="p-0">
                  Status : &nbsp; <span className="text-muted">Paid</span>{" "}
                  <i class="fa-solid fa-check text-success"></i>
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Table --> */}
          <div class="row">
            <table class="table align-middle mb-5 bg-light borderless">
              <thead class="thead">
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
                    <p class="text-muted mb-0">1</p>
                  </td>
                  <td>
                    <p class="fw-bold mb-1">{name}</p>
                    {/* <p class="text-muted mb-0"></p> */}
                  </td>
                  <td>
                    <p class="text-muted mb-0">{seatNumber}</p>
                  </td>
                  <td>
                    <p class="text-muted mb-0">{startDate}</p>
                  </td>
                  <td>
                    <p class="text-muted mb-0">{endDate}</p>
                  </td>
                </tr>
                <tr class="second-last-row">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr class="last-row">
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
          <div class="row">
            <h6 class="fs-6">Term and Conditions :</h6>
            <p class="text-muted small">
              All amount paid is non-refundable and seat allocated is
              non-transferable.
            </p>
          </div>

          <hr />

          {/* <!-- Footer --> */}
          <div class="row justify-content-center">
            <div class="col">
              <p class="small text-muted text-center">
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
