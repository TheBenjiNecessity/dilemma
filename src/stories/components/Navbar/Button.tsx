import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "../../tailwind_imports.css";
import { getNavbarClass } from "./utils/class.utils";
import { NavbarProps } from "./constants/props.contants";

interface ButtonProps
    extends NavbarProps,
        DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {
    variant?: "icon" | "text";
}

export const Button = ({
    fullWidth,
    centered,
    onClick,
    children,
}: ButtonProps) => {
    return (
        <button
            className={getNavbarClass(
                "px-2 h-full hover:text-gray-300",
                fullWidth,
                centered
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
