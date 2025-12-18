import React from "react"
import "./meet-our-team.css"
import profileIcon from "./profile-icon.png"
import { practitionersData } from "../../practitioners-page/book-practitioner/practitioners-data"


export default function MeetOurTeam() {
    // Slice array for only first 4 practitioners
    const fourPractitioners = practitionersData.slice(0,4);

    return (
        <div className="meet-our-team-container">
            <h1 className="meet-our-team-heading">Meet Our Team</h1>
            <div className="practitioner-card-container">
                {fourPractitioners.map((practitioner, idx) => (
                <div className="card" key={idx}>
                    <img src={profileIcon} alt="profile"/>
                    <h1>{practitioner.name}</h1>

                    <ul className="qualifications">
                        {practitioner.qualifications.map((qual, qIndex) => (
                        <li key={qIndex}>{qual}</li>
                    ))}
                    </ul>
                    <div className="card-button">
                        <button class="btn btn-call-to-action">Book Online</button>
                    </div>
                </div>
                ))}    
            </div>

            <div className="view-all-container">
                <a href="/Practitioners">View All GPs</a>
            </div>
        </div>
    );
}