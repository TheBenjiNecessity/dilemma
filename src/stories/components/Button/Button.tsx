import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "../../../app/globals.css";

interface ButtonProps
    extends DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {
    fullWidth?: boolean;
}

/**
 *
 * @param primary {boolean} shows primary coloring when true, otherwise shows secondary
 * @returns
 */
export const Button = ({
    fullWidth,
    className,
    children,
    ...props
}: ButtonProps) => {
    const classes = [
        fullWidth ? "w-full" : "",
        className,
        "rounded py-1 px-2 bg-gray-200 min-w-24",
    ].join(" ");

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
