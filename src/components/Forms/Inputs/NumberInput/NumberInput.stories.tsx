import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import NumberInput from "./NumberInput";

export default {
    title: "SwayUI/Forms/Inputs/NumberInput",
    component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => {
    return <NumberInput {...args}></NumberInput>;
};

export const Example = Template.bind({});
Example.args = {
    label: "Number",
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
    label: "Number",
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
    label: "Number",
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
    label: "Number",
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
