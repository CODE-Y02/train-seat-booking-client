import React, { useState } from "react";

function BookingForm() {
  const [bookedSeats, setbookedSeats] = useState(0);

  const [email, setEmail] = useState("");

  return (
    <div className="bookingForm_wrap">
      <h2>Booking APP</h2>
      <form className="bookingForm">
        {/* <BookingInput /> */}
        <div className="bookingForm_ele">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="bookingForm_ele">
          <label> Select No Of Seats</label>

          <select
            className="dropdown"
            value={bookedSeats}
            onChange={(e) => {
              setbookedSeats(e.target.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>

        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;
