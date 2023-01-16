import React from "react";

// import { dummy } from "../../Data/DUMMY";
import Row from "./Row";

const SeatsView = ({ seatsData }) => {
  return (
    <div>
      <h2>seats status </h2>
      {seatsData.map((row) => (
        <Row seats={row.seats} rowNo={row.id} key={row.id} />
      ))}
    </div>
  );
};

export default SeatsView;
