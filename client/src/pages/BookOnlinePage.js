import React, { useState, useContext } from "react";

import BookOnlineHeading from '../book-online-page/book-onlline-heading.js'
// import FormContact from '../book-online-page/booking-details/booking-details.js'
import SelectPractitioner from '../book-online-page/select-practitioner/select-practitioner.js'
import AppointmentTime from '../book-online-page/appointment-time/appointment-time.js'
import "../book-online-page/appointment-time/appointment-time.css"

// An AuthContext for user info
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

export default function BookOnlinePage() {
    // State that each child will use/update
    /* const [formContact, setFormContact] = useState ({
        firstName: "",
        lastName: "",
        email: "",
    }); */
    const [selectedPractitioner, setSelectedPractitioner] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    // Get current user from context (setup shown below)
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // If NOT logged in, show message and button
    if (!user) {
        return (
            <div>
                <BookOnlineHeading />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "2rem"
                }}>
                    <h2>Please log in or sign up to book an appointment</h2>
                    <button 
                        className="btn btn-call-to-action" 
                        onClick={() => navigate("/Account")}
                        style={{ margin: "1rem" }}
                    >
                        Go to My Account
                    </button>
                </div>
            </div>
        );
    }

    // If logged in, show the booking form as normal:
    const handleSubmit = () => {
        // Submit booking...
        console.log({
            user,
            selectedPractitioner,
            selectedDate,
            selectedTime,
        });
    };

    return(
        <>
            <BookOnlineHeading />
            
            { /* Pass state & setters so the child can display & update it
            <FormContact
                formContact={formContact}
                setFormContact={setFormContact}
            />
            */}

            <SelectPractitioner
                selectedPractitioner={selectedPractitioner}
                setSelectedPractitioner={setSelectedPractitioner}
            />

            <AppointmentTime
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
            />
            
            {/* Show name if logged in */}
            <div style={{ textAlign: "center", margin: "1rem 0" }}>
                {user ? (
                    <span>Booking appointment as <strong>{user.firstName} {user.lastName}</strong></span>
                ) : (
                    <span>
                        <a href="/login" style={{ color: '#009999', textDecoration: 'underline' }}>Sign up or log in</a> to book an appointment.
                    </span>
                )}
            </div>

            <div className="confirm-appointment-btn-container">
                <button
                    className="btn btn-call-to-action"
                    onClick={handleSubmit}
                    disabled={!user}
                >
                    Confirm Appointment
                </button>
            </div>
        </>

    );
}