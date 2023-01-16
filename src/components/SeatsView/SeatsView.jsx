import React from "react";

import { dummy } from "../../Data/DUMMY";
import Row from "./Row";

const SeatsView = () => {
  return (
    <div>
      <h2>seats status </h2>
      {dummy.map((data) => (
        <Row seats={data.seats} rowNo={data.row} />
      ))}
    </div>
  );
};

export default SeatsView;
