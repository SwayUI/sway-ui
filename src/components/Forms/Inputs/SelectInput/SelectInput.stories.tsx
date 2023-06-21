import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Badge, Text} from "@chakra-ui/react";
import {DocumentIcon} from "@heroicons/react/24/outline";
import SelectInput from "./SelectInput";

export default {
    title: "SwayUI/Forms/Inputs/SelectInput",
    component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => {
    return <SelectInput {...args}></SelectInput>;
};

export const Example = Template.bind({});
Example.args = {
    label: "First name",
    name: "name",
    placeholder: "Placeholder",
    options: [
        {
            label: "Option 1",
            value: "option1",
        },
        {
            label: "Option 2",
            value: "option2",
        },
    ],
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
    options: [
        {
            label: "Option 1",
            value: "option1",
        },
        {
            label: "Option 2",
            value: "option2",
        },
    ],
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
    options: [
        {
            label: "Option 1",
            value: "option1",
        },
        {
            label: "Option 2",
            value: "option2",
        },
    ],
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
    options: [
        {
            label: "Option 1",
            value: "option1",
        },
        {
            label: "Option 2",
            value: "option2",
        },
    ],
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
