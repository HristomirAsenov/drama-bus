import React, { FC } from "react";
import App from "App";

import { BrowserRouter, Route, Redirect } from "react-router-dom";

const Routes: FC = () => (
    <BrowserRouter>
        <Route exact component={App} path="/" />
        <Redirect from="*" to="/" />
    </BrowserRouter>
);

export default Routes;
