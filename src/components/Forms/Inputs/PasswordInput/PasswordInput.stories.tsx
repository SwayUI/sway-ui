import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import PasswordInput from "./PasswordInput";

export default {
    title: "SwayUI/Forms/Inputs/PasswordInput",
    component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => {
    return <PasswordInput {...args}></PasswordInput>;
};

export const Example = Template.bind({});
Example.args = {
    label: "Password",
    name: "name",
    placeholder: "Placeholder",
    helperText: "You need to set your name to something.",
    handleChange: () => {},
    handleBlur: () => {},
    values: {
        "name": "tesfsdfsdfs",
    },
    errors: {
    },
    touched: {
    },
};

export const Error = Template.bind({});
Error.args = {
    label: "Password",
    name: "name",
    placeholder: "Placeholder",
    helperText: "You need to set your name to something.",
    handleChange: () => {},
    handleBlur: () => {},
    values: {
        "name": "",
    },
    errors: {
        "name": "Please enter valid field",
    },
    touched: {
        "name": true,
    },
};

export const Horizontal = Template.bind({});
Horizontal.args = {
    label: "Password",
    name: "name",
    placeholder: "Placeholder",
    helperText: "You need to set your name to something.",
    handleChange: () => {},
    handleBlur: () => {},
    values: {
        "name": "",
    },
    errors: {
    },
    touched: {
    },
    isHorizontal: true,
};

export const HorizontalError = Template.bind({});
HorizontalError.args = {
    label: "Password",
    name: "name",
    placeholder: "Placeholder",
    helperText: "You need to set your name to something.",
    handleChange: () => {},
    handleBlur: () => {},
    values: {
        "name": "",
    },
    errors: {
        "name": "Please enter valid field",
    },
    touched: {
        "name": true,
    },
    isHorizontal: true,
};
