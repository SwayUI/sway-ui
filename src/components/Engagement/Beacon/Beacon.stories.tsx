import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Beacon from "./Beacon";

export default {
    title: "SwayUI/Engagement/Beacon",
    component: Beacon,
} as ComponentMeta<typeof Beacon>;

const Template: ComponentStory<typeof Beacon> = (args) => {
    return <Beacon {...args}></Beacon>;
};

export const XSmall = Template.bind({});
XSmall.args = {
    size: "xs",
    colorScheme: "purple.300"
};

export const Small = Template.bind({});
Small.args = {
    size: "sm",
    colorScheme: "blue.300"
};

export const Medium = Template.bind({});
Medium.args = {
    size: "md",
    colorScheme: "red.300"
};

export const Large = Template.bind({});
Large.args = {
    size: "lg",
    colorScheme: "green.300",
};

export const XLarge = Template.bind({});
XLarge.args = {
    size: "xl",
    colorScheme: "cyan.300",
};
