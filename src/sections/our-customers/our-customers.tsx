import React, { FC } from "react";

import SectionContainer from "components/section-container";

import { SectionName } from "enum";
import { SectionRefProp } from "components/section-container/types";

import "./our-customers.scss";
import { customers } from "./constants";
import CustomerCard from "./customer-card/customer-card";

const OurCustomers: FC<{
    sectionRef: SectionRefProp
}> = ({
    sectionRef
}) => (
        <SectionContainer name={SectionName.our_customers} sectionRef={sectionRef}>

            <h3>Наши Клиенти</h3>
            <ul className="our-clients-list">
                {
                    customers.map((customer) => <CustomerCard
                        key={`customer-card-${customer.name}`}
                        customer={customer}
                    />)
                }
            </ul>
        </SectionContainer>
    );

export default OurCustomers;
