import React from "react"

import "./our-team.css"
import OurTeamImg from "./our-team-img.png"

export default function OurTeam() {
    return (
        <div className="our-team-container">
            <div className="team-text-container">
                <h1>Our Team</h1>
                <p> 
                    Behind every appointment, procedure, and friendly greeting at reception is a dedicated group of 
                    professionals who share one vision: making healthcare simpler, more accessible, and more 
                    compassionate. Our doctors, dentists, nurses, and support staff work collaboratively to ensure you 
                    receive the highest level of care—every time you visit.
                </p>
            </div>
            <div className="image-container">
                <img src={OurTeamImg} alt="Our Team" />
            </div>
            
        </div>
    );
}