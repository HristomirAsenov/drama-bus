import React, { FC } from "react";

import SectionContainer from "components/section-container";

import "./about-us.scss";
import { SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

const AboutUs: FC<{
    sectionRef: SectionRefProp
}> = ({
    sectionRef
}) => (
    <SectionContainer name={SectionName.about_us} sectionRef={sectionRef}>
        <h3>За нас</h3>  
    </SectionContainer>
);

export default AboutUs;
