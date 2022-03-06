import React, { FC, ReactNode } from "react";

import "./button.scss";

const Button: FC<{
    type?: "button" | "submit",
    onClickHandler: (event: any) => void;
    children: ReactNode;
}> = ({
    children,
    type = "button",
    onClickHandler,
}) => (
    <button type={type} onClick={onClickHandler} className="button">
        {children}
    </button>
);

export default Button;
