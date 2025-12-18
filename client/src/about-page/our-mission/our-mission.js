import React from "react"

import "./our-mission.css"
import OurMissionImg from "./our-mission-img.png"

export default function OurStory() {
    return (
        <div className="our-mission-container">
            <div className="mission-text-container">
                <h1>Our Mission</h1>
                <p> 
                    At Happy Health, we’re committed to helping you and your loved ones lead healthier, happier lives. 
                    By combining state-of-the-art technology with compassionate, personalized care, we strive to make 
                    every visit comfortable and stress-free. Whether you’re stopping by for a routine checkup, a 
                    specialized procedure, or a simple chat about your well-being, we’re here to guide you 
                    every step of the way.
                </p>
            </div>
            <div className="image-container">
                <img src={OurMissionImg} alt="Our Mission" />
            </div>
            
        </div>
    );
}