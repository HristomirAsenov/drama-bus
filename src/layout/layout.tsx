import React, { FC, ReactNode } from "react";

import Navigation from "./subcomponents/navigation"
import Footer from  "./subcomponents/footer"
import { SectionRefProp } from "components/section-container/types";

const Layout: FC<{
    children: ReactNode,
    sectionRef: SectionRefProp,
}> = ({
    children,
    sectionRef
}) => (
    <div className="drama-bus-app">
        <Navigation />
        <main className="main-content">
            { children }
        </main>
        <Footer sectionRef={sectionRef} />
    </div>
);

export default Layout;
