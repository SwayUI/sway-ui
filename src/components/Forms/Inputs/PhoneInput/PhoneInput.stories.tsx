import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PhoneInput from "./PhoneInput";

export default {
    title: "SwayUI/Forms/Inputs/PhoneInput",
    component: PhoneInput,
} as ComponentMeta<typeof PhoneInput>;

const Template: ComponentStory<typeof PhoneInput> = (args) => {
    return <PhoneInput {...args}></PhoneInput>;
};

export const Example = Template.bind({});
Example.args = {
    label: "Phone number",
    name: "name",
    placeholder: "Search a country",
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
};

export const Error = Template.bind({});
Error.args = {
    label: "Phone number",
    name: "name",
    placeholder: "Search a country",
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
    label: "Phone number",
    name: "name",
    placeholder: "Search a country",
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
    label: "Phone number",
    name: "name",
    placeholder: "Search a country",
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
