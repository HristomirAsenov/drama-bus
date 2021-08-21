import React, { FC } from "react";
import { SectionName } from "enum";
import { NavHrefToSectionNameMap } from "global-constants";
import { SectionRefProp } from "./types";

import "./section-container.scss";

const SectionContainer: FC<{
    children: any;
    name: SectionName;
    sectionRef?: SectionRefProp
}> = ({
    children,
    name,
    sectionRef
}) => {
    return <section
    className={`${name}-section section`}
    ref={(ref) => {
        if(sectionRef){
            sectionRef.current[NavHrefToSectionNameMap[name]] = ref;
        }
    }}>
        <div className={`${name}-container container`}>
            { children }
        </div>
    </section>
};

export default SectionContainer;
