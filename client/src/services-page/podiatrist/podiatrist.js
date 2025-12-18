import React from "react"

import "../services.css"
import PodiatristImg from "./podiatrist-img.png"

export default function Podiatrist() {
    return (
        <div className="service-container">
            <div className="service-text-container">
                <h1>Podiatrist</h1>
                <p> 
                    Specializing in foot and lower limb care, our podiatrists address everything from 
                    common foot pain to complex conditions affecting mobility. Using advanced diagnostic 
                    tools and therapeutic interventions, they provide treatments to keep you on your feet 
                    comfortably—so you can stay active and maintain an independent lifestyle.
                </p>
            </div>
            <div className="image-container">
                <img src={PodiatristImg} alt="Podiatrist" />
            </div>
            
        </div>
    );
}