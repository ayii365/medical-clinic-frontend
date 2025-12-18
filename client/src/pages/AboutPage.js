import React from "react";

import AboutUsHeading from '../about-page/about-us-heading.js'
import OurStory from '../about-page/our-story/our-story.js'
import OurMission from '../about-page/our-mission/our-mission.js'
import OurTeam from '../about-page/our-team/our-team.js'

export default function AboutPage() {
    return(
        <>
            <AboutUsHeading />
            <OurStory />
            <OurMission />
            <OurTeam />
        </>

    );
}