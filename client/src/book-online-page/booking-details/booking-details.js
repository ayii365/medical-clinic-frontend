import React from "react"
import "./booking-details.css"

export default function BookingDetails() {
    return (
        <div className="entire-details-container">
            <form>
                <div className="first-last-container">
                    <div className="first-name-container">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name"></input>
                    </div>
                    <div className="last-name-container">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name"></input>
                    </div>
                </div>

                <div className="email-address-container">
                    <label>Email Address</label>
                    <input type="text" name="email" placeholder="Email Address"></input>
                </div>
            </form>
        </div>
    );
}