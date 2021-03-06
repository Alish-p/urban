import React from "react";
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

const Seat = ({ available, number, gender, showFemaleSeats = true }) => {
  let classes = "fa-solid fa-couch ";
  classes += available ? "available " : "not-available ";

  classes += (gender == "F") & showFemaleSeats ? "female-seats " : "";

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {number}
    </Tooltip>
  );

  const styles = {
    cursor: "pointer",
  };

  return (
    <Col>
      <OverlayTrigger
        style={styles}
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <i className={classes} />
      </OverlayTrigger>
    </Col>
  );
};

export default Seat;
