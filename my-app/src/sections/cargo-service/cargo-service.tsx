import React, { FC } from "react";

import { DividerColor, SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import SectionContainer from "components/section-container";
import BottomDivider from "components/divider/bottom-divider";

import "./cargo-service.scss";

const CargoService: FC<{
    sectionRef: SectionRefProp
}> = ({
    sectionRef
}) => (
    <SectionContainer name={SectionName.cargo_service} sectionRef={sectionRef} >
        <h3>Превозване на товари</h3>
        <BottomDivider color={DividerColor.light} />
    </SectionContainer>
);

export default CargoService;
