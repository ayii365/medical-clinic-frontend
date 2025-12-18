import React from "react"
import "./why-choose-us.css"
import chooseUsImg from "./choose-us-img.png"

export default function WhyChooseUs(){
    return (
        <div className="why-choose-us-container">
            <div className="img-container">
                <img src={chooseUsImg} alt="Choose Us" />
            </div>
            <div className="choose-us-text-container">
                <h1>Why Choose Us?</h1>
                <p>
                    At Happy Health, we go the extra mile to ensure you feel confident and supported 
                    throughout every step of your healthcare journey. Heres what makes us unique: 
                </p>
                <ul>
                    <li>
                        We treat patients of all ages in a welcoming environment
                    </li>
                    <li>
                        We utilise state of state-of-the-art technology for efficient diagnoses
                    </li>
                    <li>
                        Our staff consists of highly skilled and caring proffesionals here to guide you every step of the way
                    </li>
                    <li>
                        We provide flexible scheduling that fits your family’s busy life
                    </li>
                </ul>
            </div>
        </div>
    );
}