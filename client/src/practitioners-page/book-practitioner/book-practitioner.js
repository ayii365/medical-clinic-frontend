import React, { useState } from "react"

import "./book-practitioner.css"
import profileIcon from "../../home-page/meet-our-team/profile-icon.png"
import { practitionersData } from "./practitioners-data.js"

export default function BookPractitioner() {
    const [selectedFilter, setSelectedFilter] = useState("");

    // Helper function that determines wether to show card based on selected filter
    const filteredPractitioners = practitionersData.filter((practitioner) => {
        // If no filter selected, show all cards
        if (!selectedFilter) return true;
        // Else show only if qualifications match filter
        return practitioner.qualifications.includes(selectedFilter);
    })

    return (
        <div className="entire-practitioners-container">
            <div className="filter-container">
                <h2>Filter By:</h2>
                <div className="options-container">
                    <button className="btn" onClick={ () => setSelectedFilter("")}>Show All</button>
                    <button className="btn" onClick={ () => setSelectedFilter("General Practitioner")}>General Practitioner</button>
                    <button className="btn" onClick={ () => setSelectedFilter("Dietician")}>Dietician</button>
                    <button className="btn" onClick={ () => setSelectedFilter("Physiotherapist")}>Physiotherapist</button>
                    <button className="btn" onClick={ () => setSelectedFilter("Dentistry")}>Dentistry</button>
                    <button className="btn" onClick={ () => setSelectedFilter("Podiatrist")}>Podiatrist</button>
                </div>
            </div>
            <div className="practitioners-container">

                {filteredPractitioners.map((practitioner, index) => (
                    <div className="card" key={index}>
                        <img src={profileIcon} alt="profile"/>
                        <h1>{practitioner.name}</h1>
                        <ul className="qualifications">
                            {practitioner.qualifications.map((qual, i) => (
                                <li key={i}>{qual}</li>
                            ))}
                        </ul>
                        <div className="card-button">
                            <button class="btn btn-call-to-action">Book Online</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}