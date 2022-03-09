import React, { FC } from "react";

import { DividerColor, SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import SectionContainer from "components/section-container";
import TopDivider from "components/divider/top-divider";

import "./excursions-service.scss";
import CountryList from "./subcomponents/country-list/country-list";
import TripImagList from "./subcomponents/country-list/trip-image-list/trip-image-list";

const ExcursionsService: FC<{
    sectionRef: SectionRefProp
}> = ({
    sectionRef
}) => (
        <SectionContainer name={SectionName.excursions_service} sectionRef={sectionRef} >
            <TopDivider color={DividerColor.light} />
            <h3>Екскурзии</h3>
            <p className="trip-quote">Нищо не лекува така душата, както пътуването!</p>
            <CountryList />

            <div className="excursions">
                <TripImagList />
            </div>
        </SectionContainer>
    );

export default ExcursionsService;