import React from "react"

import "./form-contact-us.css"

export default function FormContact() {
    return (
        <div className="contact-us-form-container">
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
                <div className="your-message-container">
                    <label>Enter Your Message</label>
                    <textarea rows="5" name="message" placeholder="Enter your message here" />
                </div>
                <div className="submit-button-container">
                    <input className="btn btn-call-to-action" type="submit"></input>
                </div>
            </form>
        </div>
    );
}