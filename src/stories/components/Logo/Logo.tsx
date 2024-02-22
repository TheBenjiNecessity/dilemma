import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "./logo.css";

interface LogoProps
    extends DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {}

/**
 *
 * @param primary {boolean} shows primary coloring when true, otherwise shows secondary
 * @returns
 */
export const Logo = ({ children }: LogoProps) => {
    return (
        <div className="logo">
            <div className="arrow left">
                <div className="triangle"></div>
                <div className="square-wrapper">
                    <div className="square-shape"></div>
                </div>
            </div>
            <div className="arrow right">
                <div className="square-wrapper">
                    <div className="square-shape"></div>
                </div>
                <div className="triangle"></div>
            </div>
            <div className="text">{children}</div>
        </div>
    );
};
