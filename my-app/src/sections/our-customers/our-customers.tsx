import React, { FC } from "react";

import SectionContainer from "components/section-container";

import { SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import  kostalLogoSrc  from "assets/clients/kostal_logo.png";
import  areximLogoSrc  from "assets/clients/arexim_logo.png";
import  arieteLogoSrc  from "assets/clients/ariete_logo.png";
import  hronovskyLogo  from "assets/clients/hronovsky_logo.jpg";
import  cargoPartnerLogo  from "assets/clients/cargo_partner_logo.png";
import  smolyanLogo  from "assets/clients/smolyan_logo.jpg";

import "./our-customers.scss";

const OurCustomers: FC<{
    sectionRef: SectionRefProp
}> = ({
    sectionRef
}) => (
    <SectionContainer name={SectionName.our_customers} sectionRef={sectionRef}>
        <h3>Наши Клиенти</h3>
        <ul className="our-clients-list">
            <li>
                <a href="http://www.kostal.bg/a3/" target="_blank" rel="noreferrer">
                    <span>Kostal  Bulgaria LTD</span>
                    <img src={kostalLogoSrc} title="Kostal Bulgaria LTD" alt="Kostal Bulgaria LTD" />
                </a>
            </li>
            <li>
                <a href="https://www.areximengineering.bg/" target="_blank" rel="noreferrer">
                    <span>Arexim LTD</span>
                    <img src={areximLogoSrc} title="Arexim LTD" alt="Arexim LTD" />
                </a>
            </li>
            <li>
                <a href="https://www.ariete-bg.com/" target="_blank" rel="noreferrer">
                    <span>Ariete Logistics LTD</span>
                    <img src={arieteLogoSrc} title="Ariete Logistics LTD" alt="Ariete Logistics LTD" />
                </a>
            </li>
            <li>
                <a href="#/">
                    <span>Hronovsky BG</span>
                    <img src={hronovskyLogo} title="Hronovsky BG" alt="Hronovsky BG" />
                </a>
            </li>
            <li>
                <a href="https://www.cargo-partner.com/bg/" target="_blank" rel="noreferrer">
                    <span>Cargo Partner</span>
                    <img src={cargoPartnerLogo} title="Cargo Partner" alt="Cargo Partner" />
                </a>
            </li>
            <li>
                <a href="https://www.smolyan.bg/bg/home" target="_blank" rel="noreferrer">
                    <span>Община Смолян</span>
                    <img src={smolyanLogo} title="Община Смолян" alt="Община Смолян" />
                </a>
            </li>
        </ul>
    </SectionContainer>
);

export default OurCustomers;
