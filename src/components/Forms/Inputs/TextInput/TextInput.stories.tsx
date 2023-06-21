import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Badge, Text} from "@chakra-ui/react";
import {DocumentIcon} from "@heroicons/react/24/outline";
import TextInput from "./TextInput";

export default {
    title: "SwayUI/Forms/Inputs/TextInput",
    component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
    return <TextInput {...args}></TextInput>;
};

export const Example = Template.bind({});
Example.args = {
    label: "First name",
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
    label: "First name",
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
    label: "First name",
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
    label: "First name",
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
    label: "First Name",
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
    inputMask: "***-***-***",
    inputMaskChar: "*"
}
