import BookingForm from "./components/Booking/BookingForm";
// import SeatsView from "./components/SeatsView/SeatsView";

import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Status from "./components/Status";

function App() {
  // const [data, setData] = useState([]);
  const [status, setstatus] = useState({});

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    let res = await axios.get("http://localhost:3000/status");
    console.log(res.data);

    setstatus(res.data);
  };

  const bookSeats = async (no_of_seats) => {
    try {
      let res = await axios.post("http://localhost:3000/book", {
        seats: no_of_seats,
      });
      console.log(res.data);
      fetchStatus();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <BookingForm bookSeats={bookSeats} />

      {/* <SeatsView /> */}
      <Status currStats={status} />
    </div>
  );
}

export default App;
