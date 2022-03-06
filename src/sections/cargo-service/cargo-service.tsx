import React, { FC } from "react";

import { DividerColor, SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import SectionContainer from "components/section-container";
import BottomDivider from "components/divider/bottom-divider";

import whiteDaf from "assets/pictures/white_daf_truck.jpg"
import blackDaf from "assets/pictures/black_daf_truck.jpg"
import mercedesTruckOne from "assets/pictures/mercedes_truck_1.png"
import mercedesTruckTwo from "assets/pictures/mercedes_truck_2.png"

import "./cargo-service.scss";
import { FaTruck } from "react-icons/fa";

const CargoService: FC<{
    sectionRef: SectionRefProp
}> = ({
    sectionRef
}) => (
    <SectionContainer name={SectionName.cargo_service} sectionRef={sectionRef} >
        <h3>Превозване на товари</h3>
       
        <div className="cargo-services">
        <ul className="truck-types-list">
            <li className="truck-type-list-item">
                <FaTruck className="truck-image" />      
                <p>Мега камиони</p>
            </li>
            <li className="truck-type-list-item">
                <FaTruck className="truck-image" />      
                <p>Соло камиони</p>
            </li>
            <li className="truck-type-list-item">
                <FaTruck className="truck-image" />      
                <p>Хенгер камиони</p>
            </li>
        </ul>
            <div className="trucks-list">
               <img alt="Бял Даф Камион"  src={whiteDaf}/>
               <img alt="Черен Даф Камион" src={blackDaf}/>
               <img alt="Мерцедес" src={mercedesTruckOne}/>
               <img alt="Мерцедес" src={mercedesTruckTwo}/>
            </div>
        </div>
        <BottomDivider color={DividerColor.light} />
    </SectionContainer>
);

export default CargoService;
