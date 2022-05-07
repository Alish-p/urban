import React, { useEffect } from "react";
import FormContainer from "../components/FormContainer";
import Seat from "../components/Seat";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeats } from "../redux/slices/Seats";

const ViewSeats = () => {
  // const error = useSelector((state) => state.seat.error);
  // const loading = useSelector((state) => state.seat.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSeats());
  }, []);

  const seats = useSelector((state) => state.seat.seats) || [];

  const firstRow = [...seats.slice(0, 9), { seatNo: 0 }, ...seats.slice(9, 14)];
  const secondRow = [
    ...seats.slice(14, 23),
    { seatNo: 0 },
    ...seats.slice(23, 28),
  ];
  const thirdRow = [
    ...seats.slice(28, 37),
    { seatNo: 0 },
    ...seats.slice(37, 42),
  ];
  const fourthRow = [
    ...seats.slice(42, 51),
    { seatNo: 0 },
    ...seats.slice(51, 56),
  ];
  const fifthRow = [
    ...seats.slice(56, 65),
    { seatNo: 0 },
    ...seats.slice(65, 70),
  ];
  const sixthRow = [
    ...seats.slice(70, 79),
    { seatNo: 0 },
    ...seats.slice(79, 84),
  ];
  const seventhRow = [
    ...seats.slice(84, 93),
    { seatNo: 0 },
    ...seats.slice(93, 98),
  ];
  const eigthRow = [
    ...seats.slice(98, 107),
    { seatNo: 0 },
    ...seats.slice(107, 112),
  ];
  const ninthRow = [
    ...seats.slice(112, 121),
    { seatNo: 0 },
    ...seats.slice(121, 126),
  ];

  const tenthRow = [...seats.slice(126, 142)];

  return (
    <FormContainer>
      <h2 className="my-5 text-center">Available Seats</h2>

      {/* First Row 1-13 */}
      <div className="row-15 my-5">
        {firstRow.map(({ seatNo, available }) => {
          if (seatNo !== 0) {
            return (
              <Seat key={seatNo} available={available} upside number={seatNo} />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* Second Row 14-26 */}
      <div className="row-15 ">
        {secondRow.map(({ seatNo, available }) => {
          if (seatNo !== 0) {
            return (
              <Seat key={seatNo} available={available} upside number={seatNo} />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* Third Row 14-26 */}
      <div className="row-15 mb-5">
        {thirdRow.map(({ seatNo, available }) => {
          if (seatNo !== 0) {
            return (
              <Seat key={seatNo} available={available} upside number={seatNo} />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* Fourth Row 14-26 */}
      <div className="row-15 ">
        {fourthRow.map(({ seatNo, available }) => {
          if (seatNo !== 0) {
            return (
              <Seat key={seatNo} available={available} upside number={seatNo} />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* Fifth Row 14-26 */}
      <div className="row-15 mb-5">
        {fifthRow.map(({ seatNo, available }) => {
          if (seatNo !== 0) {
            return (
              <Seat key={seatNo} available={available} upside number={seatNo} />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>
      {/* Sixth Row 14-26 */}
      <div className="row-15 ">
        {sixthRow.map(({ seatNo, available }) => {
          if (seatNo !== 0) {
            return (
              <Seat key={seatNo} available={available} upside number={seatNo} />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* Seventh Row 14-26 */}
      <div className="row-15 mb-5">
        {seventhRow.map(({ seatNo, available }) => {
          if (seatNo !== 0) {
            return (
              <Seat key={seatNo} available={available} upside number={seatNo} />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>
      {/* eighth Row 14-26 */}
      <div className="row-15 ">
        {eigthRow.map(({ seatNo, available }) => {
          if (seatNo !== 0) {
            return (
              <Seat key={seatNo} available={available} upside number={seatNo} />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>

      {/* Nineth Row 14-26 */}
      <div className="row-15 mb-5">
        {ninthRow.map(({ seatNo, available }) => {
          if (seatNo !== 0) {
            return (
              <Seat key={seatNo} available={available} upside number={seatNo} />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>
      {/* 10th Row 14-26 */}
      <div className="row-15 ">
        {tenthRow.map(({ seatNo, available }) => {
          if (seatNo !== 0) {
            return (
              <Seat key={seatNo} available={available} upside number={seatNo} />
            );
          } else {
            return <div key={seatNo} className="passage"></div>;
          }
        })}
      </div>
    </FormContainer>
  );
};

export default ViewSeats;
