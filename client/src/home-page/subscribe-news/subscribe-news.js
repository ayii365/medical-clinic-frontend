import React from "react"
import "./subscribe-news.css"

export default function SubscribeNews() {
    return (
        <div className="subscribe-news-container">
            <h1 className="heading">Subscribe to our Newsletter</h1>
            <form className="subscribe-form">
                <div className="email-container">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="youremail@example.com"></input>
                </div>
                <div className="checkbox-container">
                    <div className="option-container">
                        <input type="checkbox" id="checkbox-1" class="check-box"></input>
                        <label for="check-box-1">Option 1</label>
                    </div>
                    <div className="option-container">
                        <input type="checkbox" id="checkbox-2" class="check-box"></input>
                        <label for="check-box-2">Option 2</label>  
                    </div>
                </div>  
            </form>
            <div className="subscribe-btn-container">
                <button className="btn btn-call-to-action">Subscribe</button>
            </div>
        </div>
    );
}