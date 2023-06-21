import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Badge, Text} from "@chakra-ui/react";
import {DocumentIcon} from "@heroicons/react/24/outline";
import EmailInput from "./EmailInput";

export default {
    title: "SwayUI/Forms/Inputs/EmailInput",
    component: EmailInput,
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args) => {
    return <EmailInput {...args}></EmailInput>;
};

export const Example = Template.bind({});
Example.args = {
    label: "Email address",
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
};

export const Error = Template.bind({});
Error.args = {
    label: "Email address",
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
    label: "Email address",
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
    label: "Email address",
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

export const Masked = Template.bind({});
Masked.args = {
    label: "Email address",
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
    inputMask: "***********@gmail.com",
    inputMaskChar: "*"
}
