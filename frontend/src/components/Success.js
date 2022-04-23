import React from 'react';
import './success.css';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import Pdf from 'react-to-pdf';
import { LinkContainer } from 'react-router-bootstrap';

const ref = React.createRef();

function Success() {
  const { registration, student } = useSelector(
    (state) => state.student.registration
  );

  let { startDate, endDate, seatNumber, fees, _id: rId } = registration || {};
  let { name, mobileNumber, city } = student || {};

  startDate = moment(startDate).format('DD-MM-YYYY');
  endDate = moment(endDate).format('DD-MM-YYYY');

  return (
    <div>
      <div className="page-content container">
        <div className="page-header text-blue-d2">
          <h2 className="page-title text-secondary-d1">Invoice</h2>

          <div className="page-tools">
            <div className="action-buttons">
              <Pdf
                targetRef={ref}
                scale={0.65}
                x={10}
                y={10}
                filename="code-example.pdf"
              >
                {({ toPdf }) => (
                  <button
                    className="btn bg-white btn-light mx-1px text-95"
                    data-title="Download"
                    onClick={toPdf}
                  >
                    <i className="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>{' '}
                    Download
                  </button>
                )}
              </Pdf>

              <a
                className="btn bg-white btn-light mx-1px text-95"
                href="#"
                data-title="PDF"
              >
                <i className="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>{' '}
                Export
              </a>
            </div>
          </div>
        </div>

        <div ref={ref} className="container px-0">
          <div className="row mt-4">
            <div className="col-12 col-lg-12">
              <div className="row">
                <div className="col-12">
                  <div className="text-center text-150">
                    <i className="fa fa-book fa-2x text-success-m2 mr-1"></i>
                    <span className="text-default-d3"> Urban Read</span>
                  </div>
                </div>
              </div>

              <hr className="row brc-default-l1 mx-n1 mb-4" />

              <div className="row">
                <div className="col-sm-6">
                  <div>
                    <span className="text-sm text-grey-m2 align-middle">
                      To:
                    </span>{' '}
                    &nbsp;
                    <span className="text-600 text-110 text-blue align-middle">
                      {name}
                    </span>
                  </div>
                  <div className="text-grey-m2">
                    <div className="my-1">29- A Kanodar</div>
                    <div className="my-1">{city}</div>
                    <div className="my-1">
                      <i className="fa fa-phone fa-flip-horizontal text-secondary"></i>
                      <b className="text-600">+91 {mobileNumber}</b>
                    </div>
                  </div>
                </div>

                <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                  <hr className="d-sm-none" />
                  <div className="text-grey-m2">
                    <div className="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                      Invoice
                    </div>

                    <div className="my-2">
                      <i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>
                      &nbsp;
                      <span className="text-600 text-90">ID:</span> #{rId}
                    </div>

                    <div className="my-2">
                      <i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>
                      &nbsp;
                      <span className="text-600 text-90">Issue Date:</span>{' '}
                      {startDate}
                    </div>

                    <div className="my-2">
                      <i className="fa fa-circle text-blue-m2 text-xs mr-1"></i>
                      &nbsp;
                      <span className="text-600 text-90">Status:</span>
                      Paid{' '}
                      <i
                        className="fa fa-check logo-green"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="row text-600 text-white bgc-default-tp1 py-25">
                  <div className="d-none d-sm-block col-1"> #</div>
                  <div className="col-9 col-sm-5">Name</div>
                  <div className="d-none d-sm-block col-4 col-sm-2">
                    Seat No.
                  </div>
                  <div className="d-none d-sm-block col-sm-2">Start Date</div>
                  <div className="col-2">End Date</div>
                </div>

                <div className="text-95 text-secondary-d3">
                  <div className="row mb-2 mb-sm-0 py-25">
                    <div className="d-none d-sm-block col-1"> 1</div>
                    <div className="col-9 col-sm-5">{name}</div>
                    <div className="d-none d-sm-block col-2">{seatNumber}</div>
                    <div className="d-none d-sm-block col-2 text-95">
                      {startDate}
                    </div>
                    <div className="col-2 text-secondary-d2">{endDate}</div>
                  </div>

                  <hr />

                  <div className="row border-b-2 brc-default-l2"></div>

                  <div className="row mt-3">
                    <div className="col-12 col-sm-7 text-grey-d2 text-95 text-secondary-d1 mt-2 mt-lg-0">
                      &nbsp; Kindly Note, All amounts paid hereunder shall be
                      nonrefundable once paid. ...
                    </div>

                    <div className="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                      <div className="row  align-items-center bgc-primary-l3 ">
                        <div className="col-4"></div>
                        <div className="col-4 text-right">Total Amount</div>
                        <div className="col-4">
                          <span className="text-120 text-success-d3 opacity-2">
                            {' '}
                            ₹ {fees}{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-n1">
                    <span className="text-secondary-d1 text-60  ">
                      UrbanRead 3rd Floor new Bus-stand,Palanpur Mo: 7575049646{' '}
                    </span>
                  </div>

                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <LinkContainer to={'/'}>
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
