import React from "react";

import ServicesHeading from '../services-page/services-heading.js'
import Physiotherapy from '../services-page/physiotherapy/physiotherapy.js'
import GeneralPractitioner from '../services-page/general-practitioner/general-practitioner.js'
import Dietician from '../services-page/dietician/dietician.js'
import Podiatrist from '../services-page/podiatrist/podiatrist.js'
import Dentist from '../services-page/dentist/dentist.js'


export default function ServicesPage() {
    return(
        <>
            <ServicesHeading />
            <GeneralPractitioner />
            <Dentist />
            <Physiotherapy />
            <Dietician />
            <Podiatrist />

        </>

    );
}