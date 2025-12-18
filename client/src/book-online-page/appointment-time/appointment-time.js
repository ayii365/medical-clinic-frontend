import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // import the CSS
import "./appointment-time.css";

export default function AppointmentTime() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // In a real app might load these from an API
  const timeSlots = [
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
  ];

  return (

    <div className="entire-appointment-container">
        <h1>Please select a date and time below</h1>
        <div className="date-and-time-container">
            <div className="calendar-container">
            <DatePicker
                calendarClassName="custom-calendar" 
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()} // don't allow past dates
                inline          // displays the calendar inline
            />
            </div>

            <div className="time-container">
            <h3>
                {selectedDate
                ? selectedDate.toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                })
                : ""}
            </h3>
            {timeSlots.map((time) => (
            <button
            key={time}
            className={`time-slot-btn ${
                selectedTime === time ? "selected" : ""
            }`}
            onClick={() => setSelectedTime(time)}
            >
            {time}
            </button>
            ))}
            </div>
        </div>
        
    </div>
  );
}
