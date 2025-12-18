import React from "react"

import "../services.css"
import PhysiotherapyImg from "./physiotherapy-img.png"

export default function Physiotherapy() {
    return (
        <div className="service-container">
            <div className="service-text-container">
                <h1>Physiotherapy</h1>
                <p> 
                    Our team of physiotherapists is dedicated to helping you restore mobility, reduce pain, 
                    and regain strength after injury or illness. Using evidence-based techniques—from targeted 
                    exercises to manual therapy—we create personalized treatment plans that support your recovery 
                    and enhance your overall well-being.
                </p>
            </div>
            <div className="image-container">
                <img src={PhysiotherapyImg} alt="Physiotherapy" />
            </div>
        </div>
    );
}