import React from "react";

import Hero from '../home-page/hero/Hero'
import QuickServices from '../home-page/quick-services/quick-services';
import WhyChooseUs from '../home-page/why-choose-us/why-choose-us';
import MeetOurTeam from '../home-page/meet-our-team/meet-our-team';
import QuickContact from '../home-page/quick-contact-us/quick-contact-us'
import SubscribeNews from '../home-page/subscribe-news/subscribe-news'

export default function HomePage() {
    return(
        <>
            <Hero />
            <QuickServices />
            <WhyChooseUs />
            <MeetOurTeam />
            <QuickContact />
            <SubscribeNews />
        </>

    );
}