import React, { FC } from "react";

import SectionContainer from "components/section-container";

import "./about-us.scss";
import { SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import velkoDemirbusSrc from "assets/pictures/velko_demir_bus.png";

const AboutUs: FC<{
    sectionRef: SectionRefProp
}> = ({
    sectionRef
}) => (
    <SectionContainer name={SectionName.about_us} sectionRef={sectionRef}>
        <h3>За нас</h3>
        <div className="about-us">
            <div className="about-us-text">
                <p>
                    Основана през 1996 година,изцяло българската фирма
                    "Драма-бус"ЕООД бързо се развива като лидер сред
                    утвърдените транспортни и спедиторски компании в
                    област Смолян.
                </p>
                <p>
                    С дългогодишните си традиции"Драма-бус" предлага
                    отговорна и висококачествена услуга за всички свои
                    клиенти в областа на транспорта.
                </p>
                <p>
                Предлага цялостни транспортни и
                спедиторски услуги до ключови дестинации в страната
                и чужбина.
                </p>

                <ul>
                    <li>Транспорт на чувствителни товари</li>
                    <li>Транспорт на суровини</li>
                    <li>Транспорт на гранулати</li>
                    <li>Транспорт на служители и организирани групи</li>
                </ul>
            </div>
            <div className="about-us-pictures">
                <img src={velkoDemirbusSrc} alt="Drama Bus" />
            </div>
        </div>
    </SectionContainer>
);

export default AboutUs;
