import React from "react"

import "../services.css"
import DieticianImg from "./healthy-food-img.png"

export default function Dietician() {
    return (
        <div className="service-container">
            <div className="service-text-container">
                <h1>Dietician</h1>
                <p> 
                    Our certified dieticians work with you to develop customized meal plans and dietary strategies 
                    tailored to your unique lifestyle and health goals. Whether you’re managing a chronic condition 
                    or simply seeking to improve your nutrition, our dieticians offer practical, sustainable guidance 
                    for a healthier life.
                </p>
            </div>
            <div className="image-container">
                <img src={DieticianImg} alt="Dietician" />
            </div>
            
        </div>
    );
}