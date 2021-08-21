import React, { FC } from "react";

import { DividerColor, SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import SectionContainer from "components/section-container";
import TopDivider from "components/divider/top-divider";

import  "./footer.scss";

const Footer: FC<{
    sectionRef: SectionRefProp,
}> = ({
    sectionRef
}) => {
    return <SectionContainer name={SectionName.contacts} sectionRef={sectionRef}>
        <TopDivider color={DividerColor.light} />
        <footer className="main-footer">
            <p>Всички права запазени от "ДРАМА-БУС" ЕООД</p>
        </footer>
      </SectionContainer>
};

export default Footer;
