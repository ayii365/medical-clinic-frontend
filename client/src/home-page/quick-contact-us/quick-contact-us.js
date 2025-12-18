import React from "react"
import "./quick-contact-us.css"

export default function QuickContact(){
    return (
        <div className="quick-contact-us-container">
            <h1 className="heading">Contact Us</h1>
            <h2 className="sentence">Get in touch to learn more. We'd love to hear from you</h2>
            <div className="btn-container">
                <a href="/contact">
                    <button href="/contact" className="btn btn-call-to-action"> Contact Us</button>   
                </a>
            </div>
        </div>
    );
}