import React from "react";

const Seat = ({ isBooked, seatNo }) => {
  return (
    <div
      style={{
        height: "26px",
        width: "26px",
        margin: "5px",

        background: isBooked ? "red" : "yellow",
      }}
    >
      {/*  */}
      <p> {seatNo}</p>
    </div>
  );
};

export default Seat;
