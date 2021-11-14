import { ICustomer } from "./inferfaces";

import  kostalLogoSrc  from "assets/clients/kostal_logo.png";
import  areximLogoSrc  from "assets/clients/arexim_logo.png";
import  arieteLogoSrc  from "assets/clients/ariete_logo.png";
import  hronovskyLogo  from "assets/clients/hronovsky_logo.jpg";
import  cargoPartnerLogo  from "assets/clients/cargo_partner_logo.png";
import  smolyanLogo  from "assets/clients/smolyan_logo.jpg";

export const customers: ICustomer[] = [
    {
        name: "Kostal  Bulgaria LTD",
        link: "http://www.kostal.bg/a3/",
        imageSrc: kostalLogoSrc,
    },
    {
        name: "Arexim LTD",
        link: "https://www.areximengineering.bg/",
        imageSrc: areximLogoSrc,
    },
    {
        name: "Ariete Logistics LTD",
        link: "https://www.areximengineering.bg/",
        imageSrc: arieteLogoSrc,
    },
    {
        name: "Hronovsky BG",
        link: "#/",
        imageSrc: hronovskyLogo,
    },
    {
        name: "Cargo Partner",
        link: "https://www.cargo-partner.com/bg/",
        imageSrc: cargoPartnerLogo,
    },
    {
        name: "Община Смолян",
        link: "https://www.smolyan.bg/bg/home",
        imageSrc: smolyanLogo,
    },   
];
