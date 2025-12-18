import React from "react"
import "./hero.css"

export default function Hero(){
    return (
        <div class="hero-container">
            <div class="hero-heading">
                <h1>Your Family's Health and Happiness All under One Roof</h1>
            </div>
            <div class="hero-paragraph">
              <p>At Happy Health Medical & Dental Clinic, we’re dedicated to keeping you and your loved ones 
                healthy from head to toe, so you can focus on living life to the fullest!
              </p>  
            </div>
            <div class="hero-buttons">
                <a href="/About">
                    <button class="btn btn-regular" type="button">Learn More</button>
                </a>
                <a href="/Book">
                    <button class="btn btn-call-to-action" type="button">Book Online</button>
                </a>
            </div>
        </div>
    );
}