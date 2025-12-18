import React from "react";

import ContactUsHeading from '../contact-us-page/contact-us-heading.js'
import ContactIntroduction from '../contact-us-page/contact-introduction/contact-introduction.js'
import FormContact from '../contact-us-page/form-contact-us/form-contact-us.js'



export default function ContactUsPage() {
    return(
        <>
            <ContactUsHeading />
            <ContactIntroduction />
            <FormContact />
        </>

    );
}