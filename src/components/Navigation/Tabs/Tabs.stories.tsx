import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Tabs from "./Tabs";
import {Tab, TabPanel} from "@chakra-ui/react";
import {CreditCardIcon} from "@heroicons/react/24/solid";

export default {
    title: "SwayUI/Navigation/Tabs",
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const EXAMPLE_TABS = [
    {
        title: "One",
        content: <p>one!</p>
    },
    {
        title: "Two",
        content: <p>two!</p>
    },
    {
        title: "Three",
        content: <p>three!</p>,
        icon: CreditCardIcon
    }
    ];

const Template: ComponentStory<typeof Tabs> = (args) => {
    return <Tabs {...args} tabs={EXAMPLE_TABS}></Tabs>;
};

export const SoftRounded = Template.bind({});
SoftRounded.args = {
    variant: 'soft-rounded',
    size:'sm'
};

export const Outlined = Template.bind({});
Outlined.args = {
    size: "md",
    variant: 'outline',
};

