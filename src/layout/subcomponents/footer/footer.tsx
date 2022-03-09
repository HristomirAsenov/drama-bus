import React, { FC } from "react";

import { DividerColor, SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import SectionContainer from "components/section-container";
import TopDivider from "components/divider/top-divider";

import { FaSearchLocation, FaPhone, FaMailBulk, FaFacebook } from 'react-icons/fa';

import "./footer.scss";
import { NavLink } from "react-router-dom";

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
                        <p>Ул. Родопи 132 гр. Смолян</p>
                    </li>
                    <li>
                        <FaPhone className="contact-icon" />
                        <p>+359877318111</p>
                        <p>+359885406060</p>
                    </li>
                    <li>
                        <FaFacebook className="contact-icon" />
                        <a
                            className="external-link"
                            href="https://www.facebook.com/groups/1726865727516745"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Фейсбук група
                        </a>
                    </li>
                    <li>
                        <FaMailBulk className="contact-icon" />
                        <p>v_dramaliev@abv.bg</p>
                    </li>
                </ul>
                <p>&copy; "ДРАМА-БУС" ЕООД. Всички права запазени {new Date().getFullYear()}</p>
            </footer>
        </SectionContainer>
    };

export default Footer;
