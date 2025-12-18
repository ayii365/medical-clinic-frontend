import React from "react"
import "./quick-services.css"
import generalPractitioner from "./gen-practitioner.png"
import dietician from "./dietician-img.png"
import dentist from "./dentist-img.png"

export default function QuickServices(){
    return (
        <div class="quick-services-container">
            <div class="quick-services-heading">
                <h1> Quality Healthcare All in One Place</h1>
            </div>
            <div class="service-cards-container">
                <div class="general-practitioner service-card">
                    <img src={generalPractitioner} alt="General Practitioner" />
                    <h1> GeneralPractitioner</h1>
                    <p>
                        We provide expert primary care to keep you and your family healthy. 
                        From check-ups to chronic condition management, we’ve got you covered
                    </p>
                </div>
                <div class="dietician service-card">
                    <img src={dietician} alt="Dietician" />
                    <h1> Dietician</h1>
                    <p>
                        Personalised nutrition advice to help you achieve your health goals. 
                        Whether it’s weight management or specialised dietry needs, we’re here to support you
                    </p>
                </div>
                <div class="dentist service-card">
                    <img src={dentist} alt="Dentist" />
                    <h1> Dentist</h1>
                    <p>
                        Comprehensive dental care for a confident and healthy smile. 
                        From routine cleanings to advanced treatments, your oral health is in good hands
                    </p>
                </div>
            </div>
            <div class="button-container">
                <a href="/Services">
                    <button class="btn btn-call-to-action" type="button"> All Services </button>
                </a>
            </div>
        </div>
    );
}