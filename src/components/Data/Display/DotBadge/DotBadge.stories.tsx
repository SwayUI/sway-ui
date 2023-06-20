import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Badge, Text} from "@chakra-ui/react";
import {DocumentIcon} from "@heroicons/react/24/outline";
import DotBadge from "./DotBadge";

export default {
    title: "SwayUI/Data/Display/DotBadge",
    component: DotBadge,
} as ComponentMeta<typeof DotBadge>;

const Template: ComponentStory<typeof DotBadge> = (args) => {
    return <DotBadge {...args}></DotBadge>;
};

export const XSmall = Template.bind({});
XSmall.args = {
    size: "xs",
    text: "Waiting",
    colorScheme: "purple.300"
};

export const Small = Template.bind({});
Small.args = {
    size: "sm",
    text: "Active",
    colorScheme: "red.300"
};

export const Medium = Template.bind({});
Medium.args = {
    size: "md",
    text: "Danger",
    colorScheme: "yellow.300"
};

export const Large = Template.bind({});
Large.args = {
    size: "lg",
    text: "Warning",
    colorScheme: "blue.300"
};

export const XLarge = Template.bind({});
XLarge.args = {
    size: "xl",
    text: "Active",
    colorScheme: "green.300"
};
