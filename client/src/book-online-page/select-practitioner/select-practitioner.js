import React, {useState} from "react"
import "./select-practitioner.css"
import { practitionersData } from "../../practitioners-page/book-practitioner/practitioners-data"
import profileIcon from "../../home-page/meet-our-team/profile-icon.png"


export default function SelectPractitioner() {
    // Store currently selected practitioner (null if none selected)
    const [selectedPractitioner, setSelectedPractitioner] = useState(null);

    // Handler for dropdown changes
    const handleSelectChange = (e) => {
        // Get name from event target's value
        const selectedName = e.target.value;

        if (!selectedName) {
            // If user selects the empty option, clear state
            setSelectedPractitioner(null);
            return;
        }

        // Find practitioner by name in practitionersData
        const foundPractitioner = practitionersData.find(
            (p) => p.name === selectedName
        );

        // Update state with found practitioner
        setSelectedPractitioner(foundPractitioner);
    };

    return (
        <div className="select-practitioner-container">
            <div className="select-container">
                <label htmlFor="practitioners">Choose a practitioner:</label>
                <select id="practitioners" onChange={handleSelectChange}>
                    <option value="">--Select--</option>
                    { practitionersData.map((practitioner, index) => (
                        <option key={index} value={practitioner.name}>
                            {practitioner.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="practitioner-profile">
                { /* Only render practitioner data if a practitioner is selected */}
                {selectedPractitioner && (
                    <div className="card">
                    <img src={profileIcon} alt="profile"/>
                    <h1>{selectedPractitioner.name}</h1>
                    <ul className="qualifications">
                        {selectedPractitioner.qualifications.map((qual, i) => (
                            <li key={i}>{qual}</li>
                        ))}
                    </ul>
                </div>   
                )}
            </div>
        </div>
    );
}