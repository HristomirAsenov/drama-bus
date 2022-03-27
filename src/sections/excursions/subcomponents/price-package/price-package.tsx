import React, { FC } from "react";


import "./price-package.scss";

const PricePackage: FC = () => {
    return <div className="price-package">
        <h4 className="price-heading">Ценови пакети</h4>
        <div className="prices-container">
            <p>210.00 лв. на човек в двойна стая</p>
            <p>280.00 лв. на човек в единична стая</p>
            <p>150.00 лв. за дете до 12 г.</p>
        </div>
        <div className="included-and-excluded-container">
            <div className="included-container">
                <h4>Цената включва</h4>
                <ul>
                    <li>Транспорт с лицензиран автобус</li>
                    <li>Медицинска застраховка</li>
                    <li>2 нощувки в хотел 4*</li>
                    <li>2 закуски</li>
                    <li>Туристическа програма в Истанбул с водач от фирмата</li>
                </ul>
            </div>
            <div className="excluded-container">
                <h4>Цената НЕ включва</h4>
                <ul>
                    <li>Входните такси на посещаваните обекти</li>
                </ul>

                <p>Приблизителни цени на туристическите обекти</p>
                <ul>
                    <li>Дворецът Топкапъ - ~200 турски лири</li>
                    <li>Разходка с корабче по Бoсфора - ~15 евро</li>
                    <li>Аквариум "Тюркуаз" - ~200 турски лири</li>
                </ul>
            </div>
        </div>
    </div>
};

export default PricePackage;
