import React from "react"

import "./our-story.css"
import OurStoryImg from "./our-story-img.png"

export default function OurStory() {
    return (
        <div className="our-story-container">
            <div className="story-text-container">
                <h1>Our Story</h1>
                <p> 
                    Founded in [Year], Happy Health Medical & Dental Clinic was created with a simple goal in mind: 
                    to provide comprehensive, family-centered healthcare in a welcoming environment. Our founders, 
                    Dr. Jane Smith (MD) and Dr. John Doe (DDS), both believed that patients deserved access to 
                    top-tier medical and dental services all under one roof.
                </p>
            </div>
            <div className="image-container">
                <img src={OurStoryImg} alt="Our Story" />
            </div>
            
        </div>
    );
}