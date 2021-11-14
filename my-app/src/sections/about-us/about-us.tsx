import React, { FC } from "react";

import SectionContainer from "components/section-container";

import "./about-us.scss";
import { SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import velkoDemirbusSrc from "assets/pictures/velko_demir_bus.png";


import { FaTruck } from 'react-icons/fa';


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
                    Основана през 1996 година, изцяло българската фирма
                    <span className="bold">"Драма-бус"ЕООД</span> бързо се развива като <span className="bold">лидер</span> сред
                    утвърдените транспортни и спедиторски компании в
                    <span className="bold"> област Смолян</span>.
                </p>
                <p>
                    С дългогодишните си традиции"Драма-бус" предлага
                   <span className="bold"> отговорна и висококачествена услуга</span> за всички свои
                    клиенти в областа на транспорта.
                </p>
                <p>
                Предлага цялостни транспортни и
                спедиторски услуги до ключови дестинации в страната
                и <span className="bold">чужбина</span>.
                </p>

                <ul className="our-services-list">
                    <li>
                        <FaTruck className="truck-image" />
                        Транспорт на чувствителни товари</li>
                    <li>
                        <FaTruck className="truck-image" />
                        Транспорт на суровини
                    </li>
                    <li>
                        <FaTruck className="truck-image" />
                        Транспорт на гранулати
                    </li>
                    <li>
                        <FaTruck className="truck-image" />
                        Транспорт на служители и организирани групи
                    </li>
                </ul>
            </div>
            <div className="about-us-pictures">
                <img src={velkoDemirbusSrc} alt="Drama Bus" />
            </div>
        </div>
    </SectionContainer>
);

export default AboutUs;
