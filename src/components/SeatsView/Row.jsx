import React from "react";
import Seat from "./Seat";
const Row = ({ seats, rowNo }) => {
  return (
    <div
      className="Row"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",

        border: "1px solid lightgrey",
      }}
    >
      <p>{rowNo}</p>
      {seats.map((seat) => (
        <>
          <Seat isBooked={seat.isBooked} seatNo={seat.id} />
        </>
      ))}
    </div>
  );
};

export default Row;
