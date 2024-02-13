import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Button } from "./Button";
import { Label } from "./Label";

import "../../tailwind_imports.css";
import { Expander } from "./Expander";

interface NavbarProps
    extends DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {}

/**
 * Primary UI component for user interaction
 */
const Navbar = ({ children }: NavbarProps) => {
    return (
        <nav className="h-8 w-full flex flex-row items-center text-white bg-blue-500">
            {children}
        </nav>
    );
};

Navbar.Button = Button;
Navbar.Label = Label;
Navbar.Expander = Expander;

export default Navbar;
