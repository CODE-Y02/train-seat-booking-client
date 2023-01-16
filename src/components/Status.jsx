import React from "react";

const Status = ({ currStats }) => {
  return (
    <div>
      <h2>Total seats = {currStats.totalSeats}</h2>
      <h2>Available seats = {currStats.available}</h2>
    </div>
  );
};

export default Status;
