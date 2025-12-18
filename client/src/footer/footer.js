import React from "react"
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <div className="entire-footer-container">
            <div className="footer-container">

                <div className="logo-container">
                    <a href="/" className="site-title">
                        <h1>Happy Health</h1>
                        <h2>Medical & Dental Clinic</h2>
                    </a>
                </div>

                <div className="quick-links-container">
                    <h1>Quick Links</h1>
                    <ul>
                        <li>
                            <a href="/Services">Services</a>
                        </li>

                        <li>
                            <a href="/Contact">Contact Us</a>
                        </li>

                        <li>
                            <a href="/About">About Us</a>
                        </li>
                    </ul>
                </div>

                <div className="location-and-contact-container">
                    <h1>Location and Contact</h1>

                    <div className="icon-and-location">
                        <FontAwesomeIcon icon={faLocationDot} className="fa-icon" />
                        <p>123 Fake Street, Town State Postcode</p>
                    </div>

                    <div className="icon-and-contact">
                        <FontAwesomeIcon icon={faPhone} className="fa-icon"/>
                        <p>Call Us: (12) 3456 7890</p>
                    </div>
                </div>
            </div>
            <div className="rights-container">
                <h2>® 2025 Happy Health, All Rights Reserved</h2>
            </div>
        </div>
    );
}