import React from "react"

import "../services.css"
import PhysiotherapyImg from "./gen-practitioner-img.png"

export default function GeneralPractitioner() {
    return (
        <div className="service-container">
            <div className="service-text-container">
                <h1>GeneralPractitioner</h1>
                <p> 
                    Our GPs serve as your first point of contact for all non-emergency medical concerns. 
                    They provide comprehensive, continuous care—performing routine checkups, diagnosing 
                    a wide range of conditions, and coordinating with specialists when needed. With a focus 
                    on prevention and personalized treatment, our GPs help keep you and your family in the 
                    best possible health.
                </p>
            </div>
            <div className="image-container">
                <img src={PhysiotherapyImg} alt="General Practitioner" />
            </div>
            
        </div>
    );
}