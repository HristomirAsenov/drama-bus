import React, { FC }  from "react";

import bgFlagSrc from "assets/flags/bg.png";
import roFlagSrc from "assets/flags/ro.png";
import mkFlagSrc from "assets/flags/mk.png";
import rsFlagSrc from "assets/flags/rs.png";
import trFlagSrc from "assets/flags/tr.png";
import grFlagSrc from "assets/flags/gr.png";

import "./country-list.scss";

const CountryList: FC = () => <ul className="country-list">
    <li className="country-list-item">
        <div className="country-img-container">
            <img className="country-img"
                src={bgFlagSrc}
                alt="България"
                title="България"
            />
        </div>
        България
    </li>
    <li className="country-list-item">
        <div className="country-img-container">
            <img className="country-img"
                src={roFlagSrc}
                alt="Румъния"
                title="Румъния"
            />
        </div>
        Румъния
    </li>
    <li className="country-list-item">
        <div className="country-img-container">
            <img className="country-img"
                src={mkFlagSrc}
                alt="Македония"
                title="Македония"
            />
        </div>
        Македония
    </li>
    <li className="country-list-item">
        <div className="country-img-container">
            <img className="country-img"
                src={rsFlagSrc}
                alt="Сърбия"
                title="Сърбия"
            />
        </div>
        Сърбия
    </li>
    <li className="country-list-item">
        <div className="country-img-container">
            <img className="country-img"
                src={trFlagSrc}
                alt="Турция"
                title="Турция"
            />
        </div>
        Турция
    </li>
    <li className="country-list-item">
        <div className="country-img-container">
            <img className="country-img"
                src={grFlagSrc}
                alt="Гърция"
                title="Гърция"
            />
        </div>
        Гърция
    </li>
</ul>

export default CountryList;