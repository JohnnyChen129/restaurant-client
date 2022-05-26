import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const [form, setForm] = useState();

function submitHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  onSubmit({ ...form });
  setForm({});
}

export default function reservationCreate() {
  let history = useHistory();
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="form-control"
            placeholder="First Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="form-control"
            placeholder="Last Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile_number">Mobile Number</label>
          <input
            type=""
            name="mobile_number"
            id="mobile_number"
            className="form-control"
            placeholder="Mobile Number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reservation_date">Reservation Date</label>
          <input
            type="date"
            name="reservation_date"
            id="reservation_date"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reservation_time">Time</label>
          <input
            type="time"
            name="reservation_time"
            id="reservation_time"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="people">People</label>
          <input
            type="number"
            name="people"
            id="people"
            className="form-control"
            min="1"
            required
          />
        </div>

        <div>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => history.goBack()}
          >
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}