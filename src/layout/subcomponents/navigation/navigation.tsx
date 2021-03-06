import React, { FC } from "react";
import SectionContainer from "components/section-container";

import "./navigation.scss";
import BottomDivider from "components/divider/bottom-divider";
import { DividerColor, NavigationHref, SectionName } from "enum";

const Navigation: FC = () => {
    return <SectionContainer name={SectionName.navigation}>
        <nav className="main-navbar">
            <a href="/#za-nas" className="navbar-brand">
                "ДРАМА-БУС"
                <p>Транспортни и спедиторски услуги</p>
            </a>
            <ul className="navbar-list">
                <li className="navbar-list-item">

                    <a href={`/#${NavigationHref.excursions}`}>Eкскурзии</a>
                </li>

                <li className="navbar-list-item">
                    <a href={`/#${NavigationHref.cargo}`}>Превозване на товари</a>
                </li>
            </ul>

            <ul className="navbar-list">
                <li className="navbar-list-item">
                    <a href={`/#${NavigationHref.customers}`}>Клиенти</a>
                </li>

                <li className="navbar-list-item">
                    <a href={`/#${NavigationHref.contacts}`}>Контакти</a>
                </li>
            </ul>
        </nav>
        <BottomDivider color={DividerColor.light} />
    </SectionContainer>
};

export default Navigation;
