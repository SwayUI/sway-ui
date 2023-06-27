import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Button from "./Button";
import {CreditCardIcon} from "@heroicons/react/24/solid";
import {HomeIcon} from "@heroicons/react/24/outline";

export default {
    title: "SwayUI/Engagement/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    return <Button {...args}>Submit my informations</Button>;
};

export const XSmall = Template.bind({});
XSmall.args = {
    size: "xs"
};

export const Small = Template.bind({});
Small.args = {
    size: "sm",
    variant: "ghost",
    leftIcon: CreditCardIcon,
    cooldown: 3
};

export const Medium = Template.bind({});
Medium.args = {
    size: "md",
    variant: 'primary',
    cooldown: 3
};

export const Large = Template.bind({});
Large.args = {
    size: "lg",
    variant: 'secondary',
    leftIcon: HomeIcon
};

