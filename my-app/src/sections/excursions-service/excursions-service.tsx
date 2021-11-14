import React, { FC } from "react";

import { DividerColor, SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import SectionContainer from "components/section-container";
import TopDivider from "components/divider/top-divider";

import "./excursions-service.scss";

const ExcursionsService: FC<{
    sectionRef: SectionRefProp
}> = ({
    sectionRef
}) => (
    <SectionContainer name={SectionName.excursions_service} sectionRef={sectionRef} >
        <TopDivider color={DividerColor.light} />
        <h3> Организации на екскурзии</h3>
        <div className="excursions">
            <h1>Lorem ipsum...</h1>
        </div>
    </SectionContainer>
);

export default ExcursionsService;
