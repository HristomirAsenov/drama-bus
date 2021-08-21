import { SectionRefType } from "components/section-container/types";
import { NavigationHref, SectionName } from "enum";

export const NavHrefToSectionNameMap = {
     [SectionName.about_us] : NavigationHref.about_us,
     [SectionName.excursions_service] : NavigationHref.excursions,
     [SectionName.cargo_service] : NavigationHref.cargo,
     [SectionName.our_partners] : NavigationHref.partners,
     [SectionName.contacts] : NavigationHref.contacts,
     [SectionName.navigation] : NavigationHref.navigation,
};

export const initialSectionRefState = Object.values(NavigationHref).reduce((acc, curr) => {
    acc[curr] = null;
    return acc;
}, {} as SectionRefType);

const globalConstants = {
    NavHrefToSectionNameMap,
    initialSectionRefState
};

export default globalConstants;
