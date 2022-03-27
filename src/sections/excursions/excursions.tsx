import React, { FC } from "react";

import { DividerColor, SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import SectionContainer from "components/section-container";
import TopDivider from "components/divider/top-divider";

import "./excursions.scss";
import Schedule from "./subcomponents/schedule/schedule";
import PricePackage from "./subcomponents/price-package/price-package";
import AdditionalInfo from "./subcomponents/additional-info/additional-info";
import BottomDivider from "components/divider/bottom-divider";

const ExcursionsService: FC<{
    sectionRef: SectionRefProp
}> = ({
    sectionRef
}) => (
        <SectionContainer name={SectionName.excursions_service} sectionRef={sectionRef} >
            <TopDivider color={DividerColor.light} />
            <h3>Фестивал на Лалетата Истанбул 2022</h3>

            <Schedule />
            <PricePackage />
            <AdditionalInfo />
            <BottomDivider color={DividerColor.light} />
        </SectionContainer>
    );

export default ExcursionsService;
