import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";

import "../../tailwind_imports.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/Navbar",
    component: Navbar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    render: (args) => (
        <div className="w-[500px]">
            <Navbar>
                <Navbar.Label centered>label</Navbar.Label>
                <Navbar.Expander />
                <Navbar.Button>
                    <GiHamburgerMenu />
                </Navbar.Button>
            </Navbar>
        </div>
    ),
};
