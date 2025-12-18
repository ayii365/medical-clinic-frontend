import "./Navbar.css"
import "../styles/button.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import profileIcon from "../navbar/profile-account.jpg";

export default function Navbar(){
    return ( 
        <nav className="nav-bar">
            <div className="nav-content">
                <a href="/" className="site-title">
                    <h1>Happy Health</h1>
                    <h2>Medical & Dental Clinic</h2>
                </a>
                <ul>
                    <li>
                        <a href="/About">About</a>
                    </li>

                    <li>
                        <a href="/Services">Services</a>
                    </li>

                    <li>
                        <a href="/Contact">Contact Us</a>
                    </li>

                    <li>
                        <a href="/Practitioners" >Practitioners</a>
                    </li>

                    <li>
                        <a href="/Book">
                            <button class="btn btn-call-to-action" type="button">Book Online</button>
                        </a>
                    </li>
                </ul>
                <div className="my-account-icon">
                    <a href="/Account">
                        <img src={profileIcon} alt="My Account" />
                        <h2>My Account</h2>
                    </a>
                </div>
            </div>
            <div className="location-and-contact">
                <div className="icon-and-location">
                    <FontAwesomeIcon icon={faLocationDot} className="fa-icon" />
                    <p>123 Fake Street, Town State Postcode</p>
                </div>

                <div className="icon-and-contact">
                    <FontAwesomeIcon icon={faPhone} className="fa-icon"/>
                    <p>Call Us: (12) 3456 7890</p>
                </div>
            </div>
        </nav>
    );
}