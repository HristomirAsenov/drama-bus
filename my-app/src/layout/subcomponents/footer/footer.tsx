import React, { FC } from "react";

import { DividerColor, SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import SectionContainer from "components/section-container";
import TopDivider from "components/divider/top-divider";

import { FaSearchLocation, FaPhone, FaMailBulk } from 'react-icons/fa';

import  "./footer.scss";

const Footer: FC<{
    sectionRef: SectionRefProp,
}> = ({
    sectionRef
}) => {
    return <SectionContainer name={SectionName.contacts} sectionRef={sectionRef}>
        <TopDivider color={DividerColor.light} />
        <footer className="main-footer">
            <h3>Контакти</h3>
            <ul className="contacts">
                <li>
                    <FaSearchLocation className="contact-icon" />
                    <p>Ул.Родопи 123 гр.Смолян</p>
                </li>
                <li>
                    <FaPhone className="contact-icon" />
                    <p>+359877318111</p>
                    <p>+359885406060</p>
                </li>
                <li>
                    <FaMailBulk className="contact-icon" />
                    <p>v_dramaliev@abv.bg</p>
                </li>
            </ul>
            <p>Всички права запазени от "ДРАМА-БУС" ЕООД</p>
        </footer>
      </SectionContainer>
};

export default Footer;
