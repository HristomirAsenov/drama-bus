import React, { FC, useEffect, useRef, useMemo } from 'react';

import { useHistory } from "react-router-dom";

import { SectionRefType } from 'components/section-container/types';
import { NavigationHref } from 'enum';

import { initialSectionRefState } from 'global-constants';

import Layout from 'layout';
import AboutUs from 'sections/about-us';
import Excursions from 'sections/excursions';
import CargoService from 'sections/cargo-service';
import OurCustomers from 'sections/our-customers';

import "./App.scss";

const App: FC = () => {
    const { location: { hash } } = useHistory();

    const initialState = useMemo(() => initialSectionRefState, []);

    const sectionsRefs = useRef<SectionRefType>(initialState);

    useEffect(() => {
        const sectionName = hash.slice(1) as NavigationHref;
        const section = sectionsRefs.current[sectionName];

        if (!section) {
            return;
        }

        section.scrollIntoView();

    }, [hash]);

    return (
        <Layout sectionRef={sectionsRefs}>
            <AboutUs sectionRef={sectionsRefs} />

            <Excursions sectionRef={sectionsRefs} />
            <CargoService sectionRef={sectionsRefs} />
            <OurCustomers sectionRef={sectionsRefs} />
        </Layout>
    );
}
export default App;
