import React, { FC } from "react";

import SectionContainer from "components/section-container";

import "./our-partners.scss";
import { SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

const OurPartners: FC<{
    sectionRef: SectionRefProp
}> = ({
    sectionRef
}) => (
    <SectionContainer name={SectionName.our_partners} sectionRef={sectionRef}>
        <h3>Нашите Партнъори</h3>  
    </SectionContainer>
);

export default OurPartners;
