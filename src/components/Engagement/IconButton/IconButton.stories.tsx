import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "./IconButton";
import {LifebuoyIcon} from "@heroicons/react/24/outline";
import Button from "../Button";

export default {
    title: "SwayUI/Engagement/IconButton",
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
    return <Button {...args}></Button>;
};

export const XSmall = Template.bind({});
XSmall.args = {
    size: "xs",
    icon: LifebuoyIcon
};

export const Small = Template.bind({});
Small.args = {
    size: "sm",
    variant: "ghost",
    icon: LifebuoyIcon
};

export const Medium = Template.bind({});
Medium.args = {
    size: "md",
    icon: LifebuoyIcon
};

export const Large = Template.bind({});
Large.args = {
    size: "lg",
    variant: "ghost",
    icon: LifebuoyIcon
};

export const XLarge = Template.bind({});
XLarge.args = {
    size: "xl",
    icon: LifebuoyIcon
};
