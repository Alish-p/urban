import React, { useEffect } from "react";
import FormContainer from "../components/FormContainer";
import Seat from "../components/Seat";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeats } from "../redux/slices/Seats";

import Message from "../components/Message";
import Loader from "../components/Loader";

const ViewSeats = () => {
  // const error = useSelector((state) => state.seat.error);
  // const loading = useSelector((state) => state.seat.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSeats());
  }, []);

  const seats = useSelector((state) => state.seat.seats) || [];
  const error = useSelector((state) => state.seat.error);
  const loading = useSelector((state) => state.seat.loading);

  const firstRow = [...seats.slice(0, 8), { seatNo: 0 }, ...seats.slice(8, 13)];
  const secondRow = [
    ...seats.slice(13, 21),
    { seatNo: 0 },
    ...seats.slice(21, 26),
  ];
  const thirdRow = [
    ...seats.slice(26, 34),
    { seatNo: 0 },
    ...seats.slice(34, 39),
  ];
  const fourthRow = [
    ...seats.slice(39, 46),
    { seatNo: 0 },
    ...seats.slice(46, 50),
  ];
  const fifthRow = [
    ...seats.slice(50, 57),
    { seatNo: 0 },
    ...seats.slice(57, 61),
  ];
  const sixthRow = [
    ...seats.slice(61, 69),
    { seatNo: 0 },
    ...seats.slice(69, 74),
  ];
  const seventhRow = [
    ...seats.slice(74, 82),
    { seatNo: 0 },
    ...seats.slice(82, 87),
  ];
  const eigthRow = [
    ...seats.slice(87, 94),
    { seatNo: 0 },
    ...seats.slice(94, 98),
  ];
  const ninthRow = [
    ...seats.slice(98, 105),
    { seatNo: 0 },
    ...seats.slice(105, 109),
  ];
  const tenthRow = [
    ...seats.slice(109, 117),
    { seatNo: 0 },
    ...seats.slice(117, 122),
  ];

  const eleventhRow = [
    ...seats.slice(122, 130),
    { seatNo: 0 },
    ...seats.slice(130, 135),
  ];

  const twelthRow = [
    ...seats.slice(135, 143),
    { seatNo: 0 },
    ...seats.slice(143, 147),
  ];

  return (
    <FormContainer>
      <h2 className="my-5 text-center">Available Seats</h2>

      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader size="sm" />}

      {/* First Row 1-13 */}
      <div className="row-15 my-5">
        {firstRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* Second Row 14-26 */}
      <div className="row-15 ">
        {secondRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* Third Row 14-26 */}
      <div className="row-15 mb-5">
        {thirdRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* Fourth Row 14-26 */}
      <div className="row-15 ">
        {fourthRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage-beam"></div>;
          }
        })}
      </div>

      {/* Fifth Row 14-26 */}
      <div className="row-15 mb-5">
        {fifthRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage-beam"></div>;
          }
        })}
      </div>
      {/* Sixth Row 14-26 */}
      <div className="row-15 ">
        {sixthRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* Seventh Row 14-26 */}
      <div className="row-15 mb-5">
        {seventhRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>
      {/* eighth Row 14-26 */}
      <div className="row-15 ">
        {eigthRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage-beam"></div>;
          }
        })}
      </div>

      {/* Nineth Row 14-26 */}
      <div className="row-15 mb-5">
        {ninthRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage-beam"></div>;
          }
        })}
      </div>
      {/* 10th Row 14-26 */}
      <div className="row-15 ">
        {tenthRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* 11th Row 14-26 */}
      <div className="row-15 mb-5 ">
        {eleventhRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* 12th Row 14-26 */}
      <div className="row-15 mb-5 ">
        {twelthRow.map(({ seatNo, available, gender }) => {
          if (seatNo !== 0) {
            return (
              <Seat
                key={seatNo}
                available={available}
                gender={gender}
                number={seatNo}
              />
            );
          } else {
            return <div key={seatNo} className="passage-last"></div>;
          }
        })}
      </div>
    </FormContainer>
  );
};

export default ViewSeats;
