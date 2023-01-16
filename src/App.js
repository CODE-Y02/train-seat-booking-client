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
    try {
      let res = await axios.get(
        "https://train-seat-booking-server2.onrender.com/status"
      );
      console.log(res.data);

      setstatus(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const bookSeats = async (no_of_seats) => {
    try {
      let res = await axios.post(
        "https://train-seat-booking-server2.onrender.com/book",
        {
          seats: no_of_seats,
        }
      );
      console.log(res.data);
      fetchStatus();
    } catch (error) {
      console.log(error);
    }
  };

  const resetStatus = async (e) => {
    try {
      e.preventDefault();

      let res = await axios.get(
        "https://train-seat-booking-server2.onrender.com/reset"
      );
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

      {status.totalSeats > status.available && (
        <button onClick={resetStatus}> reset</button>
      )}
    </div>
  );
}

export default App;
