import React from "react"

import "../services.css"
import DentalImg from "./dental-img.png"

export default function Dentist() {
    return (
        <div className="service-container">
            <div className="service-text-container">
                <h1>Dentistry</h1>
                <p> 
                    Our experienced dentists provide a wide range of oral health services—from regular 
                    cleanings and checkups to restorative and cosmetic treatments—all designed to keep 
                    your teeth and gums healthy. By focusing on prevention and patient education, we 
                    aim to help you maintain a confident smile and overall well-being for years to come.
                </p>
            </div>
            <div className="image-container">
                <img src={DentalImg} alt="Dentist" />
            </div>
            
        </div>
    );
}