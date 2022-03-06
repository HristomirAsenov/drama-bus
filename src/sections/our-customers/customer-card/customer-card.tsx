import React, { FC } from "react";
import { ICustomer } from "../inferfaces";

import "./customer-card.scss";

const CustomerCard: FC<{
   customer: ICustomer
}> = ({customer}) => (
    <li className="customer-list-item">
        <a href={customer.link} target="_blank" rel="noreferrer">
            <p className="customer-name">{customer.name}</p>
            <div className="customer-image-container">  
                <img
                    className="customer-image"
                    src={customer.imageSrc}
                    title={customer.name}
                    alt={customer.name}
                />
            </div>
        </a>
    </li>
);

export default CustomerCard;
