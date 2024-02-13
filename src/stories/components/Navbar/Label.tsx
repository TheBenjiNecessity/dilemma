import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { NavbarProps } from "./constants/props.contants";
import { getNavbarClass } from "./utils/class.utils";

import "../../tailwind_imports.css";

interface LabelProps
    extends NavbarProps,
        DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {}

export const Label = ({ fullWidth, centered, children }: LabelProps) => {
    return (
        <label className={getNavbarClass("px-2", fullWidth, centered)}>
            {children}
        </label>
    );
};
