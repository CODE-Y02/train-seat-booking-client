import BookingForm from "./components/Booking/BookingForm";
import SeatsView from "./components/SeatsView/SeatsView";

import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Status from "./components/Status";

function App() {
  // const [data, setData] = useState([]);
  const [status, setstatus] = useState({});

  const [seatsData, setSeatsData] = useState([]);

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      console.log(process.env.REACT_APP_BASE_URL);
      let statusResponse = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/status`
      );
      // console.log(statusResponse.data);

      let seatsRes = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/bookingStatus`
      );

      console.log(seatsRes);
      if (statusResponse.data) setstatus(statusResponse.data);
      if (seatsRes.data) setSeatsData(seatsRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const bookSeats = async (no_of_seats) => {
    try {
      let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/book`, {
        seats: no_of_seats,
      });
      console.log(res.data);

      alert("Seats Booked");
      fetchStatus();
    } catch (error) {
      console.log(error);
    }
  };

  const resetStatus = async (e) => {
    try {
      e.preventDefault();

      await axios.get(`${process.env.REACT_APP_BASE_URL}/reset`);

      fetchStatus();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div>
        <BookingForm bookSeats={bookSeats} />
        <Status currStats={status} />
      </div>

      <SeatsView seatsData={seatsData} />

      {status && status.available < status.totalSeats && (
        <button onClick={resetStatus}> reset</button>
      )}
    </div>
  );
}

export default App;
